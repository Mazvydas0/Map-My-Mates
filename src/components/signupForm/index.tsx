"use client";
import Image from "next/image";
import logo from "/public/whiteLogo.png";
import Link from "next/link";
// import InputComponent from "@/components/user-input";
import { useForm } from "react-hook-form";
import * as zod from "@hookform/resolvers/zod";
import { userFormData, loginSchema } from "@/types/common";
import { Button } from "../ui/button";
import InputComponent from "../ui/user-input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DatePicker } from "../ui/date-picker";
import { Label } from "../ui/label";
import CountrySelector from "../ui/country-selector";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormData>({ resolver: zod.zodResolver(loginSchema) });

  const onSubmit = (data: userFormData) => {
    // const userEmail = data.userEmail.trim()
    // console.log(data);
  };

  return (
    <main className="bg-gradiant  flex justify-center items-center my-5">
      <section className=" flex items-center justify-center ">
        <Card className=" w-[100%] max-w-[552px] rounded-[5px] bg-white pb-[20px] drop-shadow-[0_3px_20px_rgba(0,0,0,0.16)] md:h-auto ">
          <CardHeader className="bg-gradiant-green rounded-tl-[5px] rounded-tr-[5px] text-center ">
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <InputComponent
                    id={"firstName"}
                    type={"firstName"}
                    label={"First Name"}
                    placeholder={"Enter First Name"}
                    register={register("userFirstName")}
                    error={errors.userFirstName}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <InputComponent
                    id={"lastName"}
                    type={"lastName"}
                    label={"Last Name"}
                    placeholder={"Enter Last Name"}
                    register={register("userLastName")}
                    error={errors.userLastName}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="text-[14px] font-normal text-light-green">
                    Nationality
                  </Label>
                  <CountrySelector />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="text-[14px] font-normal text-light-green">
                    Date of Birth
                  </Label>
                  <DatePicker />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <InputComponent
                    id={"address"}
                    type={"address"}
                    label={"Address"}
                    placeholder={"Enter your address"}
                    register={register("userAddress")}
                    error={errors.userAddress}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <InputComponent
                    id={"email"}
                    type={"email"}
                    label={"Email"}
                    placeholder={"Enter Email"}
                    register={register("userEmail")}
                    error={errors.userEmail}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <InputComponent
                    id={"password"}
                    type={"password"}
                    label={"Password"}
                    placeholder={"Enter Password"}
                    register={register("userPassword")}
                    error={errors.userPassword}
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
                  Signup
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
