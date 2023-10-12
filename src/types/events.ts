export enum EventTypesList {
  ComingEvents,
  PastEvents,
}
export type eventType = {
  details: string;
  type: EventTypesList;
  id: number;
  name: string;
  city: string;
  location: {
    Latitude: number;
    Longitude: number;
  };
  profile: string;
};
