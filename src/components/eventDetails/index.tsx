import ImagesSlider from "../basic/ImagesSlider";
import Menu from "../menu/Menu";
import EventDetailsCard from "../basic/EventDetailsCard";
import BackToHome from "../ui/backToHome";
import React from "react";
import EventsImagesInput from "./EventsImagesInput";

const EventDetails = ({
  data,
  EventOwner,
  EventDetails,
  currentUser,
  params,
}: any) => {
  return (
    <>
      <div className="flex flex-col">
        <BackToHome />
        <div></div>
        <div className="md:mx-12 mx-2 my-7">
          <div className="text-lg font-bold text-[#0a3d62]"> Event details</div>
          <EventDetailsCard data={EventDetails} />
        </div>
        <EventsImagesInput
          eventOwner={EventOwner}
          currentUser={currentUser}
          params={params}
        />
      </div>
      <div>
        <div className="md:mx-16 mx-2 text-lg font-bold text-[#0a3d62]">
          Event photos
        </div>
        <ImagesSlider images={EventDetails?.eventImages?.images} />
      </div>

      <div className="absolute z-10 bg-[#0a3d62] px-4 py-2 rounded flex ml-auto right-3 top-3">
        <Menu />
      </div>
    </>
  );
};

export default EventDetails;
