"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-datepicker/dist/react-datepicker.css";
import { TabIndicator } from "../components/settings/TabIndicator";
import { EditProfileTab } from "../components/settings/tabs/EditProfileTab";
import { PreferencesTab } from "../components/settings/tabs/PreferencesTab";
import { SecurityTab } from "../components/settings/tabs/SecurityTab";
import { Tab, FormValues, formSchema } from "../components/settings/types";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("edit");
  const [profileImage, setProfileImage] = useState("/main-user.png");

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
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "edit":
        return (
          <EditProfileTab
            register={register}
            control={control}
            errors={errors}
            isDirty={isDirty}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            onSubmit={handleSubmit(onSubmit)}
          />
        );
      case "preferences":
        return <PreferencesTab />;
      case "security":
        return <SecurityTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-8">
      {/* Content */}
      <div className="px-4 lg:px-8 pt-6">
        {/* Profile Form */}
        <div className="bg-white rounded-[25px] p-4 lg:p-8">
          <TabIndicator activeTab={activeTab} setActiveTab={setActiveTab} />
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderTabContent()}
          </form>
        </div>
      </div>
    </div>
  );
}
