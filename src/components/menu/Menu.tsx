import React from "react";
import SideMenuItems from "./SideMenuItems";
import MenuDetails from "./MenuDetails";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getProfileImage from "@/app/actions/getProfileImage";


export default async function Menu() {
  const currentUser: any = await getCurrentUser();
  const profilePicture: any = await getProfileImage();


  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <div className="bg-[#dff9fb] h-screen flex flex-col">
          <SideMenuItems />
          <MenuDetails
            currentUser={currentUser}
            profilePicture={profilePicture}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
