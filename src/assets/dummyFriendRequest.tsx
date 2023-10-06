import { addFriendListType, friendReqType } from "@/types/addFriend";

let friendRequestList: addFriendListType[] = [
  {
    type: friendReqType.FriendRequest,
    details: "Jenny send you friend request",
  },
  {
    type: friendReqType.AcceptRequest,
    details: "Luke accept you friend request",
  },
  {
    type: friendReqType.FriendSuggestion,
    details: "Add David in you friend list",
  },
];

export default friendRequestList;
