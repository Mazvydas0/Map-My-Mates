import React from "react";
import SideMenuItems from "./SideMenuItems";
import MenuDetails from "./MenuDetails";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <div className="bg-[#dff9fb] h-screen flex flex-col">
          <SideMenuItems />
          <MenuDetails />
        </div>
      </SheetContent>
    </Sheet>
  );
}
