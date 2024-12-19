"use client";

import Image from "next/image";
import { EditIcon } from "../icons";
import { useRef } from "react";

interface ProfileImageProps {
  profileImage: string;
  setProfileImage: (image: string) => void;
}

export function ProfileImage({ profileImage, setProfileImage }: ProfileImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
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
  );
} 