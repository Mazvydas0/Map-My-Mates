import React from "react";
import MateMap from "../map";
import Menu from "../menu/Menu";
import { getEventDataForMap } from "@/app/actions/getEventsDetailsMap";

export default async function MainPage() {
  const getEventList = await getEventDataForMap()

  return (
    <div className="flex relative">
      <div className="bg-gray-200 w-full h-screen">
        <MateMap EventList={getEventList}/>
      </div>
      <div className="absolute z-10 bg-[#0a3d62] px-4 py-2 rounded flex ml-auto right-3 top-3">
        <Menu />
      </div>
    </div>
  );
}
