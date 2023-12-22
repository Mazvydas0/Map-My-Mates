"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import UserInfo from "./UserInfo";
import Link from "next/link";
import { eventMotions } from "@/lib/motion";
import { motion } from "framer-motion";
import { PrivacySetting } from "./PrivacySetting";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import placeholderPic from "../../../public/placeholder.jpg";
import { User, UserImage } from "@prisma/client";
import axios from "axios";

interface ProfileProps {
  currentUser: User;
  profilePicture: UserImage;
}

export default function Profile({ currentUser, profilePicture }: ProfileProps) {
  const router = useRouter();
  const [avatar, setAvatar] = useState(placeholderPic);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef: any = useRef(null);

  const renderImage: any = selectedFile ? selectedFile : profilePicture?.image;

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const response = await axios.post("/api/saveImage", {
          binaryData: selectedFile,
        });

        setSelectedFile(null);
        if (response.status >= 200 && response.status < 300) {
          toast.success("Image saved !");
          router.refresh();
        } else {
          toast.error("Failed to Save Image!");
        }
      } catch (error) {
        toast.error("No Image Selected!");
      }
    }
  };

  // function to add image from file reader
  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent: any) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const logoutFunction = () => {
    toast.success("Successfully logged out !");
    signOut();
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-30 ">
      <div className="bg-white w-full overflow-hidden flex absolute shadow-xl"></div>
      <div className="relative flex flex-col items-center justify-center">
        <div onClick={() => filePickerRef.current.click()}>
          <Image
            src={renderImage || avatar}
            alt="Profile Avatar"
            className="rounded-full w-24 h-24 cursor-pointer object-cover border-2 border-[#0a3d62]"
            width={90}
            height={90}
          />
          <input
            type="file"
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
          />
        </div>
        {selectedFile && (
          <button
            onClick={() => handleImageUpload()}
            className=" border bg-green-600 px-3 mt-2 rounded-xl py-1 hover:text-white"
          >
            Save
          </button>
        )}
      </div>
      <div className="flex space-x-5 justify-center my-4 text-base">
        <PrivacySetting />
      </div>
      <motion.nav variants={eventMotions} initial="hidden" whileInView="show">
        <UserInfo currentUser={currentUser} />
      </motion.nav>
      <motion.nav variants={eventMotions} initial="hidden" whileInView="show">
        <div className="mt-4">
          <Link className="w-full " href="">
            <div
              onClick={() => logoutFunction()}
              className="w-full flex items-center justify-between bg-white hover:bg-slate-300 transition-all duration-200 px-3 py-1"
            >
              <div className="flex items-center gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="jss2598 ml-0.5"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                  width="24"
                  height="24"
                >
                  <path
                    d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"
                    fillOpacity="0.54"
                    fill="#000000"
                  ></path>
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                </svg>
                Logout
              </div>
            </div>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
