import { NotificationTypesList, notificationType } from "@/types/notifications";

let notificationsDummyData: notificationType[] = [
  {
    notification: "John accept your friend request",
    type: NotificationTypesList.FriendRequest,
  },
  {
    notification: "Mari attending new Event",
    type: NotificationTypesList.Event,
  },
  {
    notification: "You need to modify your setting",
    type: NotificationTypesList.Alert,
  },
  {
    notification: "New Event is coming",
    type: NotificationTypesList.Event,
  },
];

export default notificationsDummyData;
