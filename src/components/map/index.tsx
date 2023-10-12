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
import eventsData from "@/assets/eventsDummyData";
import EventsPopupCard from "../basic/EventsPopupCard";

export default function MateMap() {
  let [showPopup, setShowPopup] = useState<boolean>();
  const [friendspinData, setFriendspinData] = useState(friendsPins);
  const [eventsPinData, setEventsPinData] = useState(eventsData);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const mapRef = useRef(null);

  // Friends Pin will be coming from backend API
  useEffect(() => {
    setFriendspinData(friendsPins);
  }, []);

  const handleMarkerClick = (pin: any) => {
    setTimeout(() => {
      setShowPopup(true);
      setSelectedMarkerId(pin.id);
    }, 10);
  };
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

        {friendspinData.map((pin, index) => {
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

        {eventsPinData.map((pin, index) => {
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
                  {<MdLocationOn size={30} color="red" />}
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
                  <EventsPopupCard
                    id={pin.id}
                    name={pin.name}
                    profile={pin.profile}
                    location={pin.location}
                    city={pin.city}
                    details={pin.details}
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
