export enum friendReqType {
  FriendRequest,
  AcceptRequest,
  FriendSuggestion,
}
export type addFriendListType = {
  details: string;
  type: friendReqType;
};
