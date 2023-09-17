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

export default function MateMap() {
  let [showPopup, setShowPopup] = useState<boolean>();
  const [freindspinData, setFreindspinData] = useState(friendsPins);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

  // Friends Pin will be coming from backend API
  useEffect(() => {
    setFreindspinData(friendsPins);
    console.log(freindspinData);
  }, []);

  const handleMarkerClick = (pin: any) => {
    console.log("Before updating", showPopup);
    console.log("Name of Friebd", pin?.Name);
    setTimeout(() => setShowPopup(true), 10);
    // setShowPopup(true);
    console.log("After updating", showPopup);
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

        {freindspinData.map((pin, index) => {
          return (
            <div>
              <Marker
                key={index}
                longitude={pin.Location.Longitude}
                latitude={pin.Location.Latitude}
              >
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={(e) => handleMarkerClick(pin)}
                >
                  {<MdLocationOn size={30} color="#0a3d62" />}
                </button>
              </Marker>

              {showPopup ? (
                <Popup
                  offset={25}
                  latitude={pin.Location.Latitude}
                  longitude={pin.Location.Longitude}
                  onClose={() => {
                    setShowPopup(false);
                  }}
                  closeButton={false}
                >
                  <h3 className="">{pin.Name}</h3>
                  <div className="">
                    {/* <label className={classes.popupLabel}>Code: </label>
							<span>{selectedMarker.airport.code}</span>
							<br />
							<label className={classes.popupLabel}>Country: </label>
							<span>{selectedMarker.airport.country}</span>
							<br />
							<label className={classes.popupLabel}>Website: </label>
							<Link
								href={selectedMarker.airport.url === "" ? "#" : selectedMarker.airport.url}
								target={selectedMarker.airport.url === "" ? null : "_blank"}
								className={classes.popupWebUrl}
							>
								{selectedMarker.airport.url === "" ? "Nil" : selectedMarker.airport.url}
							</Link> */}
                  </div>
                </Popup>
              ) : null}
            </div>
          );
        })}
      </Map>
    </div>
  );
}
