"use client";
import Notifications from "../notifications";
import { useStateContext } from "@/lib/contextProvider";
import Events from "../events-notifications";
import Chat from "../chat";
import AddFriends from "../addFriends";
import Profile from "../profile";

export default function MenuDetails() {
  const { activeTab, setActiveTab } = useStateContext();
  console.log(activeTab);
  return (
    <div className="relative p-4 border-2 flex flex-col  flex-1">
      <div className="opacity-100 h-[529px] overflow-y-auto">
        {activeTab === "notifications" ? (
          <Notifications />
        ) : activeTab === "events" ? (
          <Events />
        ) : activeTab === "chat" ? (
          <Chat />
        ) : activeTab === "addUser" ? (
          <AddFriends />
        ) : activeTab === "profile" ? (
          <Profile />
        ) : (
          <div>Details will be here..</div>
        )}
      </div>
    </div>
  );
}
