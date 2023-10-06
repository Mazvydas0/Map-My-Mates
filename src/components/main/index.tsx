import React from "react";
import SideMenuItems from "./SideMenuItems";
import MenuDetails from "./MenuDetails";
import MateMap from "../map";

export default function MainPage() {
  return (
    <div className="flex">
      <div className="bg-gray-200 w-3/4 h-screen">
        <MateMap />
      </div>
      <div className="bg-[#dff9fb] w-1/4 h-screen flex flex-col">
        <SideMenuItems />
        <MenuDetails />
      </div>
    </div>
  );
}
