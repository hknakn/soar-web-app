"use client";

import { cn } from "@/lib/utils";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormValues } from "./types";

interface FormFieldProps {
  label: string;
  name: keyof FormValues;
  type?: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export function FormField({
  label,
  name,
  type = "text",
  register,
  error
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-base text-[#232323] leading-[19.36px]">
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        className={cn(
          "w-full h-[50px] bg-white border rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]",
          error ? "border-red-500" : "border-[#DFEAF2]"
        )}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
} 