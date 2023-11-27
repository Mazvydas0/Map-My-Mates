"use client";

import { Label } from "@radix-ui/react-label";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface CustomInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
  placeholder,
}) => {
  return (
    <>
      <div className="w-full flex flex-col justify-start gap-y-1">
        <Label
          className="text-[14px] font-normal text-light-green"
          htmlFor={id}
        >
          {label}
        </Label>
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={placeholder}
          type={type}
          className={` flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50
      ${errors[id] ? "border-red-500" : "border-neutral-300"}
      ${errors[id] ? "focus:border-red-500" : "focus:border-black"}`}
        />
        {/* {errors && <span className="text-[#FF0000] text-[12px] font-myfontRegular">{errors.message}</span>} */}
      </div>
    </>
  );
};

export default CustomInput;
