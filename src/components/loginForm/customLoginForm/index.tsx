"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/whiteLogo.png";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "@/components/ui/customInput";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CustomSignInForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged IN");
        router.push("/");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <main className="bg-gradient  flex justify-center items-center mt-14">
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
              className={`mb-[1rem] font-myFontRegular`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <CustomInput
                    id="email"
                    label="Email"
                    type="email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <CustomInput
                    id="password"
                    type="password"
                    label="Password"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="flex justify-between">
                  <span className="font-myFontRegular text-[10px] text-dark-green md:text-[14px]">
                    Not a member?{" "}
                    <Link className="underline" href={"/signup"}>
                      Sign up
                    </Link>
                  </span>
                  <span className="font-myFontRegular text-[10px] text-dark-green md:text-[14px]">
                    <Link href={"auth/forgot-password"}>Forgot Password?</Link>
                  </span>
                </div>
              </div>
              <div className="mt-[27px] flex w-full justify-center">
                <Button
                  className="self-end mt-10 w-20 py-2 px-4 bg  text-[#0a3d62] 
      hover:bg-[#0a3d62] bg-white hover:text-white rounded"
                >
                  {" "}
                  Sign in
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default CustomSignInForm;
