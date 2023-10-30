import { friendDetails } from "@/types/friendDetails";
import { DataTable, columns } from "../basic/DataTable";
import DataCard from "../basic/DataDetailCard";
import ImagesSlider from "../basic/ImagesSlider";
import Menu from "../menu/Menu";
import { eventType } from "@/types/events";
import eventImages from "../../assets/eventImages";
import EventDetailsCard from "../basic/EventDetailsCard";
import BackToHome from "../ui/backToHome";

export default function EventDetails(data: eventType) {
  return (
    <div className="flex flex-col">
      <BackToHome />
      {/* Basic Details will be here */}
      <div></div>
      {/* Description part */}
      <div className="md:mx-12 mx-2 my-7">
        <div className="text-lg font-bold text-[#0a3d62]"> Event Details</div>
        <EventDetailsCard data={data} />
      </div>
      {/* Images part */}
      <div>
        <div className="md:mx-16 mx-2 text-lg font-bold text-[#0a3d62]">
          Event Photos
        </div>
        <ImagesSlider images={eventImages} />
      </div>
      <div className="absolute z-10 bg-[#0a3d62] px-4 py-2 rounded flex ml-auto right-3 top-3">
        <Menu />
      </div>
    </div>
  );
}
