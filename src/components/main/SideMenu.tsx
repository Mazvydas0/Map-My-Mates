import MdNotificationsNone from "react-icons/md";
import {
  Bell,
  Calendar,
  MessagesSquare,
  UserPlus2,
  UserSquare,
} from "lucide-react";
export default function SideMenu() {
  return (
    <div className="px-2 py-4 flex justify-evenly space-x-4 text-lg font-bold bg-gray-300">
      <div>
        <Bell />
      </div>
      <div>
        <Calendar />
      </div>
      <div>
        <MessagesSquare />
      </div>
      <div>
        <UserPlus2 />
      </div>
      <div>
        <UserSquare />
      </div>
    </div>
  );
}
