"use client";
import Notifications from "../notifications";
import { useStateContext } from "@/lib/contextProvider";
import Events from "../eventsList";
import Chat from "../chat";
import AddFriends from "../addFriends";
import Profile from "../profile";
import { User, UserImage } from "@prisma/client";

interface MenuDetailsProps {
  currentUser: User;
  profilePicture: UserImage;
}

export default function MenuDetails({
  currentUser,
  profilePicture,
}: MenuDetailsProps) {
  const { activeTab, setActiveTab } = useStateContext();
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
          <Profile currentUser={currentUser} profilePicture={profilePicture} />
        ) : (
          <div>Details will be here..</div>
        )}
      </div>
    </div>
  );
}
