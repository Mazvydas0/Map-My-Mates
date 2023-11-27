"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CountrySelector from "@/components/ui/country-selector";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import logo from "/public/whiteLogo.png";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/customInput";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
      password: "",
    },
  });

  const nationality = watch("Nationality");

  const dateOfBirth = watch("dateOfBirth");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const OnSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const nationalityValue = nationality?.label;

    const updatedData = {
      ...data,
      Nationality: nationalityValue,
    };

    axios
      .post("/api/register", updatedData)
      .then(() => {
        toast.success("Register Successfully!");
        router.push("/signin");
      })
      .catch((error) => {
        toast.error("Something went Wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="bg-gradient  flex justify-center items-center my-5">
      <section className=" flex items-center justify-center ">
        <Card className=" w-[100%] max-w-[552px] rounded-[5px] bg-white pb-[20px] drop-shadow-[0_3px_20px_rgba(0,0,0,0.16)] md:h-auto ">
          <CardHeader className="bg-gradient-green rounded-tl-[5px] rounded-tr-[5px] text-center ">
            <div className="flex h-24 flex-col items-center  bg-[#0a3d62] text-white mt-4">
              <Image
                className=""
                height={90}
                src={logo}
                alt={"MMM logo"}
                priority
              />
            </div>
          </CardHeader>
          <CardContent>
            <form
              className={`mb-[1rem] font-myfontRegular`}
              onSubmit={handleSubmit(OnSubmit)}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <CustomInput
                    id="firstName"
                    label="First Name"
                    disabled={isLoading}
                    register={register}
                    placeholder="Enter Your FirstName"
                    errors={errors}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <CustomInput
                    id="lastName"
                    label="Last Name"
                    disabled={isLoading}
                    register={register}
                    placeholder="Enter Your LastName"
                    errors={errors}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="text-[14px] font-normal text-light-green">
                    Nationality
                  </Label>
                  <CountrySelector
                    value={nationality}
                    onChange={(value) => setCustomValue("Nationality", value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="text-[14px] font-normal text-light-green">
                    Date of Birth
                  </Label>
                  <DatePicker
                    value={dateOfBirth}
                    onChange={(value: any) =>
                      setCustomValue("dateOfBirth", value)
                    }
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <CustomInput
                    id="address"
                    label="Address"
                    disabled={isLoading}
                    register={register}
                    placeholder="Enter Your Address"
                    errors={errors}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <CustomInput
                    id="email"
                    label="Email"
                    type="email"
                    disabled={isLoading}
                    register={register}
                    placeholder="Enter Your Email"
                    errors={errors}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <CustomInput
                    id="password"
                    label="Password"
                    type="password"
                    disabled={isLoading}
                    register={register}
                    placeholder="Enter Your Password"
                    errors={errors}
                    required
                  />
                </div>
              </div>
              <div className=" flex w-full justify-center">
                <Button
                  type="submit"
                  className="self-end mt-10 w-20 py-2 px-4 bg  text-[#0a3d62] 
      hover:bg-[#0a3d62] bg-white hover:text-white rounded"
                >
                  {" "}
                  Sign up
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default SignupForm;
