"use client";
import MdNotificationsNone from "react-icons/md";
import {
  Bell,
  Calendar,
  MessagesSquare,
  UserPlus2,
  UserSquare,
} from "lucide-react";
import Link from "next/link";
import { useStateContext } from "@/lib/contextProvider";

export default function SideMenuItems() {
  const { activeTab, setActiveTab } = useStateContext();

  return (
    <div className="px-2 py-4 flex justify-evenly space-x-4 text-lg font-bold bg-[#0a3d62] text-white">
      <div className="flex flex-col -space-y-4">
        <a onClick={() => setActiveTab("notifications")}>
          <Bell />
        </a>
        {activeTab === "notifications" ? <div>___</div> : <></>}
      </div>
      <div className="flex flex-col -space-y-4">
        <a onClick={() => setActiveTab("events")}>
          <Calendar />
        </a>
        {activeTab === "events" ? <div>___</div> : <></>}
      </div>
      <div className="flex flex-col -space-y-4">
        <a onClick={() => setActiveTab("chat")}>
          <MessagesSquare />
        </a>
        {activeTab === "chat" ? <div>___</div> : <></>}
      </div>
      <div className="flex flex-col -space-y-4">
        <a onClick={() => setActiveTab("addUser")}>
          <UserPlus2 />
        </a>
        {activeTab === "addUser" ? <div>___</div> : <></>}
      </div>
      <div className="flex flex-col -space-y-4">
        <a onClick={() => setActiveTab("profile")}>
          <UserSquare />
        </a>
        {activeTab === "profile" ? <div>___</div> : <></>}
      </div>
    </div>
  );
}
