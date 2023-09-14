import React from "react";
import SideMenu from "./SideMenu";

export default function MainPage() {
  return (
    <div className="flex ">
      <div className="bg-gray-200 w-3/4 h-screen">map</div>
      <div className="bg-green-100 w-1/4 h-screen">
        <SideMenu />
      </div>
    </div>
  );
}
