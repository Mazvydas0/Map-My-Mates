"use client";

import Image from "next/image";
import { useState } from "react";
import UserInfo from "./UserInfo";
import { Settings } from "lucide-react";
import Link from "next/link";
import { eventMotions } from "@/lib/motion";
import { motion } from "framer-motion";

export default function Profile() {
  const [avatar, setAvatar] = useState(
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
  );

  return (
    <div className="sticky top-0 left-0 right-0 z-30 ">
      <div className="bg-white w-full overflow-hidden flex absolute shadow-xl"></div>
      <div className="relative flex justify-center">
        <div>
          <Image
            src={avatar}
            alt="Profile Avatar"
            className="rounded-full w-24 h-24 cursor-pointer object-cover border-2 border-[#0a3d62]"
            width={90}
            height={90}
          />
        </div>
      </div>
      <div className="flex space-x-5 justify-center my-4 text-base">
        <div>Edit Profile</div> <Settings />
      </div>
      <motion.nav variants={eventMotions} initial="hidden" whileInView="show">
        <UserInfo />
      </motion.nav>
      <motion.nav variants={eventMotions} initial="hidden" whileInView="show">
        <div className="mt-4">
          <Link className="w-full " href="/Logout">
            <div className="w-full flex items-center justify-between bg-white hover:bg-slate-300 transition-all duration-200 px-3 py-1">
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


