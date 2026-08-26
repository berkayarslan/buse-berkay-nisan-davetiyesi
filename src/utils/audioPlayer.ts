class RomanticAudio {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      this.isPlaying = true;
      this.playRomanticChords();
    } catch {
      // ignore audio context restrictions
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.audioCtx) {
      this.audioCtx.close().catch(() => {});
      this.audioCtx = null;
    }
  }

  private playRomanticChords() {
    if (!this.isPlaying || !this.audioCtx) return;

    // Arpeggio notes frequency (E-G#-B-E chord progression)
    const melody = [
      [329.63, 392.00, 493.88, 587.33], // Em7
      [293.66, 369.99, 440.00, 587.33], // Dadd9
      [261.63, 329.63, 392.00, 523.25], // Cmaj7
      [246.94, 311.13, 369.99, 493.88], // B7
    ];

    let chordIdx = 0;
    const playNext = () => {
      if (!this.isPlaying || !this.audioCtx) return;

      const chord = melody[chordIdx % melody.length];
      chord.forEach((freq, i) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + i * 0.4);

        gain.gain.setValueAtTime(0, this.audioCtx.currentTime + i * 0.4);
        gain.gain.linearRampToValueAtTime(0.04, this.audioCtx.currentTime + i * 0.4 + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + i * 0.4 + 2.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(this.audioCtx.currentTime + i * 0.4);
        osc.stop(this.audioCtx.currentTime + i * 0.4 + 2.6);
      });

      chordIdx++;
      this.timerId = window.setTimeout(playNext, 2400);
    };

    playNext();
  }
}

export const romanticAudio = new RomanticAudio();
