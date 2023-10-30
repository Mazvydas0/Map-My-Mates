import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DatePicker } from "../ui/date-picker";

export default function AddNewEvent() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add New Event</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Event</h4>
            <p className="text-sm text-muted-foreground">Enter event details</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Name</Label>
              <Input id="name" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="city">City</Label>
              <Input id="city" className="col-span-2 h-8" />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="latitude">Latitude</Label>
              <Input id="latitude" className="col-span-2 h-8" />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="longitude">Longitude</Label>
              <Input id="longitude" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="longitude">Date</Label>
              <DatePicker />
            </div>

            <div className="flex justify-end">
              <Button variant="outline">Save</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
