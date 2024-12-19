"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { EditIcon } from "../components/icons";
import { cn } from "@/lib/utils";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Tab = "edit" | "preferences" | "security";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dateOfBirth: z.date(),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("edit");
  const [profileImage, setProfileImage] = useState("/main-user.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initial form values
  const defaultValues = {
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "**********",
    dateOfBirth: new Date("1990-01-25"),
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "edit":
        return (
          <div className="flex flex-col lg:flex-row lg:gap-6">
            {/* Left Column - Profile Image */}
            <div className="w-full lg:w-[200px] lg:shrink-0 flex justify-center lg:block mb-8 lg:mb-0">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleImageClick}
                  className="group relative w-[120px] h-[120px] rounded-full"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-full ring-4 ring-white transition-transform group-hover:scale-105">
                    <Image
                      src={profileImage}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -right-2 -bottom-2 w-9 h-9 bg-[#232323] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <EditIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-black/0 transition-colors group-hover:bg-black/10" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Right Column - Form Fields */}
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    User Name
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

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

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    Present Address
                  </label>
                  <input
                    {...register("presentAddress")}
                    type="text"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    Permanent Address
                  </label>
                  <input
                    {...register("permanentAddress")}
                    type="text"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    City
                  </label>
                  <input
                    {...register("city")}
                    type="text"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    Postal Code
                  </label>
                  <input
                    {...register("postalCode")}
                    type="text"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base text-[#232323] leading-[19.36px]">
                    Country
                  </label>
                  <input
                    {...register("country")}
                    type="text"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-8 lg:mt-12 flex justify-center lg:justify-end">
                <button
                  type="submit"
                  disabled={!isDirty}
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
      case "preferences":
        return (
          <div className="min-h-[400px] flex items-center justify-center text-[#718EBF]">
            Preferences settings coming soon...
          </div>
        );
      case "security":
        return (
          <div className="min-h-[400px] flex items-center justify-center text-[#718EBF]">
            Security settings coming soon...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-8">
      {/* Content */}
      <div className="px-4 lg:px-8 pt-6">
        {/* Profile Form */}
        <div className="bg-white rounded-[25px] p-4 lg:p-8">
          {/* Tabs */}
          <div className="flex gap-4 lg:gap-8 border-b border-[#F1F5F9] mb-8 lg:mb-12 overflow-x-auto">
            <button
              onClick={() => setActiveTab("edit")}
              className={cn(
                "pb-4 text-[15px] font-medium relative whitespace-nowrap",
                activeTab === "edit" ? "text-[#232323]" : "text-[#718EBF]"
              )}
            >
              Edit Profile
              {activeTab === "edit" && (
                <div className="w-full h-1 bg-[#232323] rounded-t-full absolute bottom-0 left-0" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("preferences")}
              className={cn(
                "pb-4 text-[15px] font-medium relative whitespace-nowrap",
                activeTab === "preferences"
                  ? "text-[#232323]"
                  : "text-[#718EBF]"
              )}
            >
              Preferences
              {activeTab === "preferences" && (
                <div className="w-full h-1 bg-[#232323] rounded-t-full absolute bottom-0 left-0" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={cn(
                "pb-4 text-[15px] font-medium relative whitespace-nowrap",
                activeTab === "security" ? "text-[#232323]" : "text-[#718EBF]"
              )}
            >
              Security
              {activeTab === "security" && (
                <div className="w-full h-1 bg-[#232323] rounded-t-full absolute bottom-0 left-0" />
              )}
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {renderTabContent()}
          </form>
        </div>
      </div>
    </div>
  );
}
