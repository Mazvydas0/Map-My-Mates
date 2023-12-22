"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../ui/customInput";
import { useState } from "react";
import CountrySelector from "../ui/country-selector";
import { DatePicker } from "../ui/date-picker";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function PrivacySetting() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Form Control
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      Nationality: "",
      dateOfBirth: "",
      address: "",
      email: "",
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const nationality = watch("Nationality");
  const dateOfBirth = watch("dateOfBirth");

  // OnSubmit Button
  const OnSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const nationalityValue = nationality?.label;

      const updatedData = {
        ...data,
        Nationality: nationalityValue,
      };

      const response = await axios.post("/api/updateUserProfile", updatedData);

      if (response.status >= 200 && response.status < 300) {
        toast.success("Profile Updated !");
        router.refresh;
      } else {
        toast.error("Profile failed to update !");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex space-x-4 text-[#0a3d62]">
          <p className=" hover:cursor-pointer hover:text-sky-900">
            Edit Profile
          </p>{" "}
          <Settings />
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
            <div className="grid grid-cols-1 items-center gap-4 w-full">
              <div className=" flex items-center  ">
                <Label htmlFor="name" className="">
                  First Name
                </Label>
                <CustomInput
                  id="firstName"
                  label=""
                  disabled={isLoading}
                  register={register}
                  placeholder="Enter Your FirstName"
                  errors={errors}
                />
              </div>

              <div className=" flex items-center ">
                <Label htmlFor="name">Last Name</Label>
                <CustomInput
                  id="lastName"
                  label=""
                  register={register}
                  placeholder="Enter Your LastName"
                  errors={errors}
                />
              </div>
            </div>

            <div className=" flex items-center ">
              <Label htmlFor="address">Address</Label>
              <CustomInput
                id="address"
                label=""
                disabled={isLoading}
                register={register}
                placeholder="Enter Your Address"
                errors={errors}
              />
            </div>

            <div className=" flex items-center ">
              <Label htmlFor="address">Email</Label>
              <CustomInput
                id="email"
                label=""
                disabled={isLoading}
                register={register}
                placeholder="Enter Your Email"
                errors={errors}
              />
            </div>

            <div className=" flex items-center space-x-4  w-full ">
              <Label className="text-[14px] font-normal text-light-green">
                Nationality
              </Label>
              <CountrySelector
                value={nationality}
                onChange={(value) => setCustomValue("Nationality", value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Label className="text-[14px] font-normal text-light-green">
                Date of Birth
              </Label>
              <DatePicker
                value={dateOfBirth}
                onChange={(value: any) => setCustomValue("dateOfBirth", value)}
              />
            </div>
            <button
              onClick={handleSubmit(OnSubmit)}
              className=" bg-sky-400 p-2 hover:bg-blue-800 text-white transition duration-300 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
