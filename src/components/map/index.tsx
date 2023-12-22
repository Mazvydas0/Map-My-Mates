"use client";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState, useRef } from "react";
import friendsPins from "@/assets/FriendsPinsData";
import { MdLocationOn } from "react-icons/md";
import FriendsPopupCard from "../basic/FriendsPopupCard";
import EventsPopupCard from "../basic/EventsPopupCard";

interface MateMapProps {
  EventList: any;
}

export default function MateMap({ EventList }: MateMapProps) {
  let [showPopup, setShowPopup] = useState<boolean>();
  const [friendsPinData, setFriendsPinData] = useState(friendsPins);
  const [eventsPinData, setEventsPinData] = useState(EventList);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef: any = useRef(null);

  useEffect(() => {
    setFriendsPinData(friendsPins);
  }, []);

  useEffect(() => {
    setEventsPinData(EventList);
    // move the map to the newly created event location
    if (mapLoaded && EventList.length > 0 && mapRef.current) {
      const latestEvent = EventList[EventList.length - 1];
      mapRef.current.getMap().flyTo({
        latitude: latestEvent.latitude,
        longitude: latestEvent.longitude,
        zoom: 12,
      });
    }
  }, [mapLoaded, EventList]);

  // setting mapLoaded to true, when map's loaded
  useEffect(() => {
    if (mapRef.current) {
      setMapLoaded(true);
    }
  }, [mapRef]);

  const handleMarkerClick = (pin: any) => {
    setTimeout(() => {
      setShowPopup(true);
      setSelectedMarkerId(pin.id);
    }, 10);
  };

  const currentDate = new Date();

  // filtering events of the future
  const futureEvents = eventsPinData?.filter((event: any) => {
    const eventStartDate = new Date(event.date);
    return eventStartDate > currentDate;
  });

  return (
    <div className="flex-1 h-full">
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{ latitude: 37.8, longitude: -122.4, zoom: 10 }}
        maxZoom={20}
        minZoom={3}
      >
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />

        {friendsPinData.map((pin, index) => {
          return (
            <div key={index}>
              <Marker
                key={index}
                longitude={pin.location.Longitude}
                latitude={pin.location.Latitude}
              >
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={(e) => handleMarkerClick(pin)}
                >
                  {<MdLocationOn size={30} color="#0a3d62" />}
                </button>
              </Marker>

              {showPopup && pin.id === selectedMarkerId ? (
                <Popup
                  offset={25}
                  latitude={pin.location.Latitude}
                  longitude={pin.location.Longitude}
                  onClose={() => {
                    setShowPopup(false);
                  }}
                  closeButton={false}
                  className="rounded-lg shadow-zinc-600"
                >
                  <FriendsPopupCard
                    id={pin.id}
                    name={pin.name}
                    profile={pin.profile}
                    location={pin.location}
                    metPlace={pin.metAt}
                    details={pin.details}
                  />
                </Popup>
              ) : null}
            </div>
          );
        })}

        {futureEvents?.map((pin: any, index: any) => {
          return (
            <div key={index}>
              <Marker
                key={index}
                longitude={pin?.longitude}
                latitude={pin?.latitude}
              >
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={(e) => handleMarkerClick(pin)}
                >
                  {<MdLocationOn size={30} color="red" />}
                </button>
              </Marker>

              {showPopup && pin.id === selectedMarkerId ? (
                <Popup
                  offset={25}
                  latitude={pin?.latitude}
                  longitude={pin?.longitude}
                  onClose={() => {
                    setShowPopup(false);
                  }}
                  closeButton={false}
                  className="rounded-lg shadow-zinc-600"
                >
                  <EventsPopupCard
                    id={pin?.id}
                    name={pin?.name}
                    profile={pin?.eventImage}
                    location={pin?.city}
                    city={pin?.city}
                    details={pin?.detail}
                  />
                </Popup>
              ) : null}
            </div>
          );
        })}
      </Map>
    </div>
  );
}
