export enum NotificationTypesList {
  Alert,
  FriendRequest,
  Event,
}
export type notificationType = {
  notification: string;
  type: NotificationTypesList;
};
