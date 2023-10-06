import { addFriendListType, friendReqType } from "@/types/addFriend";
import friendRequestList from "@/assets/dummyFriendRequest";
import { eventMotions } from "@/lib/motion";
import { motion } from "framer-motion";
import { Info, UserCheck2, UserPlus2, Users } from "lucide-react";

export default function AddFriends() {
  return (
    <div>
      {friendRequestList.map((item: addFriendListType, index) => (
        <motion.nav
          key={index}
          variants={eventMotions}
          initial="hidden"
          whileInView="show"
        >
          <div className="bg-white opacity-100 rounded-md flex p-2 space-x-4 my-3">
            <div>
              {item.type === friendReqType.AcceptRequest ? (
                <UserCheck2 />
              ) : item.type === friendReqType.FriendRequest ? (
                <UserPlus2 />
              ) : item.type === friendReqType.FriendSuggestion ? (
                <Info />
              ) : (
                <Users />
              )}
            </div>

            <div>{item.details}</div>
          </div>
        </motion.nav>
      ))}
    </div>
  );
}
