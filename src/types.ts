export interface WeddingDetails {
  brideName: string;
  groomName: string;
  brideFullName: string;
  groomFullName: string;
  brideParents: string;
  groomParents: string;
  weddingDate: string;
  weddingDateDisplay: string;
  weddingDay: string;
  weddingTime: string;
  venueName: string;
  venueAddress: string;
  city: string;
  googleMapsUrl: string;
  appleMapsUrl: string;
  yandexMapsUrl: string;
  contactPhone: string;
  dressCode: string;
  dressCodeDescription?: string;
  tagline: string;
  familiesText: string;
  quote: string;
  hashtag: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  iconName: string;
}
