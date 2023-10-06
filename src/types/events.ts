export enum EventTypesList {
  ComingEvents,
  PastEvents,
}
export type eventType = {
  details: string;
  type: EventTypesList;
};
