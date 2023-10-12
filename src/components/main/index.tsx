import React from "react";
import SideMenuItems from "../menu/SideMenuItems";
import MenuDetails from "../menu/MenuDetails";
import MateMap from "../map";
import Menu from "../menu/Menu";

export default function MainPage() {
  return (
    <div className="flex relative">
      <div className="bg-gray-200 w-full h-screen">
        <MateMap />
      </div>
      <div className="absolute z-10 bg-[#0a3d62] px-4 py-2 rounded flex ml-auto right-3 top-3">
        <Menu />
      </div>
    </div>
  );
}
