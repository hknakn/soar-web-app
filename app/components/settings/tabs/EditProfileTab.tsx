"use client";

import { Controller, UseFormRegister, Control } from "react-hook-form";
import DatePicker from "react-datepicker";
import { cn } from "@/lib/utils";
import { FormField } from "../FormField";
import { ProfileImage } from "../ProfileImage";
import { FormValues } from "../types";

interface ProfileData {
  // Add specific types based on your data structure
  name: string;
  email: string;
  // ... other profile fields
}

interface EditProfileTabProps {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  errors: Record<string, any>;
  isDirty: boolean;
  profileImage: string;
  setProfileImage: (image: string) => void;
  onSubmit: () => void;
}

export function EditProfileTab({
  register,
  control,
  errors,
  isDirty,
  profileImage,
  setProfileImage,
  onSubmit
}: EditProfileTabProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-6">
      <ProfileImage 
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />

      {/* Right Column - Form Fields */}
      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
          <FormField
            label="Your Name"
            name="name"
            register={register}
            error={errors.name}
          />
          <FormField
            label="User Name"
            name="username"
            register={register}
            error={errors.username}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />

          <div className="space-y-2 w-full">
            <label className="text-base text-[#232323] leading-[19.36px]">
              Date of Birth
            </label>
            <div className="relative w-full">
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="dd MMMM yyyy"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg pl-4 pr-12 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                    wrapperClassName="w-full"
                  />
                )}
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
                  stroke="#718EBF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <FormField
            label="Present Address"
            name="presentAddress"
            register={register}
            error={errors.presentAddress}
          />
          <FormField
            label="Permanent Address"
            name="permanentAddress"
            register={register}
            error={errors.permanentAddress}
          />
          <FormField
            label="City"
            name="city"
            register={register}
            error={errors.city}
          />
          <FormField
            label="Postal Code"
            name="postalCode"
            register={register}
            error={errors.postalCode}
          />
          <FormField
            label="Country"
            name="country"
            register={register}
            error={errors.country}
          />
        </div>

        {/* Save Button */}
        <div className="mt-8 lg:mt-12 flex justify-center lg:justify-end">
          <button
            type="submit"
            disabled={!isDirty}
            onClick={onSubmit}
            className={cn(
              "w-full lg:w-auto px-8 lg:px-24 h-[50px] text-white text-[18px] leading-[21.78px] font-medium rounded-[15px] transition-colors",
              isDirty
                ? "bg-[#232323] hover:bg-[#232323]/90"
                : "bg-[#232323]/50 cursor-not-allowed"
            )}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
} 