import { EventTypesList, eventType } from "@/types/events";

let eventsData: eventType[] = [
  {
    details: "Abc events coming in your area",
    type: EventTypesList.ComingEvents,
    id: 123334,
    name: "eventA",
    city: "abc",
    location: { Latitude: 37.723232, Longitude: -122.4343434 },
    profile:
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    details: "June Events updates",
    type: EventTypesList.PastEvents,
    id: 127673,
    name: "eventB",
    city: "xyz",
    location: { Latitude: 37.9543454, Longitude: -122.44656 },
    profile:
      "https://images.pexels.com/photos/338503/pexels-photo-338503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    details: "Mike is arranging event in UK",
    type: EventTypesList.ComingEvents,
    id: 12663,
    name: "eventc",
    city: "xysajz",
    location: { Latitude: 37.834232454, Longitude: -122.467656 },
    profile:
      "https://images.pexels.com/photos/338501/pexels-photo-338501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    details: "Mega event coming soon",
    type: EventTypesList.ComingEvents,
    id: 12343,
    name: "eventD",
    city: "xskyz",
    location: { Latitude: 37.8343454, Longitude: -122.45656 },
    profile:
      "https://images.pexels.com/photos/338506/pexels-photo-338506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
];

export default eventsData;
