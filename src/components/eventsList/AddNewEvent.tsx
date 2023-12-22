"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DatePicker } from "../ui/date-picker";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CountrySelector from "../ui/country-selector";

export default function AddNewEvent() {
  const router = useRouter();
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      city: "",
      latitude: "",
      longitude: "",
      date: "",
      eventImage: "",
      detail: "",
      country: "",
    },
  });
  const date = watch("date");
  const Country = watch("country");
  const UpdatedCountry = Country.toLowerCase().replace(/\s/g, "");
  console.log("Updated Country ---->", UpdatedCountry);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Data = e.target.result as string;
        setBase64Image(base64Data);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  // make a function for customSetValue
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    const updatedData = {
      ...data,
      eventImage: base64Image,
      country: UpdatedCountry,
    };

    axios
      .post("/api/createEvent", updatedData)
      .then(() => {
        toast.success("Event Created !");
        reset(); // Reset the form after a successful API request
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Error Creating Event!", error);
      });
  };
  

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add New Event</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Event</h4>
              <p className="text-sm text-muted-foreground">
                Enter event details
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  {...register("city")}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="city">Country</Label>
                <Input
                  id="country"
                  {...register("country")}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="city">Details</Label>
                <Input
                  id="detail"
                  {...register("detail")}
                  className="col-span-2 h-8"
                />
              </div>

              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="latitude">Latitude</Label>
                <Input
                  id="latitude"
                  {...register("latitude")}
                  className="col-span-2 h-8"
                />
              </div>

              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="longitude">Longitude</Label>
                <Input
                  id="longitude"
                  {...register("longitude")}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="longitude">Date</Label>
                <DatePicker
                  value={date}
                  onChange={(value: any) => setCustomValue("date", value)}
                />
              </div>

              <div className=" grid grid-cols-3 items-center gap-4 ">
                <Label htmlFor="image">Event Image</Label>
                <Input
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="col-span-2"
                />
              </div>

              <div className="flex justify-end">
                <Button variant="outline">Save</Button>
              </div>
            </div>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
