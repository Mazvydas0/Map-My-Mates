import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";

export function PrivacySetting() {
  //in props you'll get user data, but for UI I'm going to use hardcoded data here
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex space-x-4 text-[#0a3d62]">
          <p>Edit Profile</p> <Settings />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-bold leading-none text-[#0a3d62]">Setting</h4>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Make Profile Public</Label>
              <label className="relative inline-flex items-center cursor-pointer">
                <Input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0a3d62] dark:peer-focus:ring-[#0a3d62] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#0a3d62]"></div>
              </label>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue="Change your name"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                defaultValue="address"
                className="col-span-2 h-8"
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="longituted">Longituted</Label>
              <Input
                id="longituted"
                defaultValue="Longituted"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="latitude">Latitude</Label>
              <Input
                id="latitude"
                defaultValue="Latitude"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="picture">Change Profile</Label>
              <Input id="picture" type="file" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
