import FriendDetails from "@/components/friendDetails";
import { friendDetails } from "@/types/friendDetails";
import pic1 from "/public/pic1.jpg";
import pic2 from "/public/pic2.jpg";
import pic3 from "/public/pic3.jpg";
import pic4 from "/public/pic4.jpg";
import pic5 from "/public/pic5.jpg";

const dummyFriendData: friendDetails = {
  firstName: "Thomas",
  lastName: "Maso",
  dateOfBirth: new Date(1992, 9, 20),
  nationality: "British",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,

  howMet: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  meetingDates: [
    {
      date: new Date(2012, 10, 2).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      place: "UK",
    },
    {
      date: new Date(2015, 5, 3).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      place: "US",
    },
    {
      date: new Date(2018, 11, 2).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      place: "AU",
    },
  ],
  Images: [pic2, pic3, pic4, pic5],
  profilePic:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300",
};
export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <FriendDetails
        firstName={dummyFriendData.firstName}
        lastName={dummyFriendData.lastName}
        dateOfBirth={dummyFriendData.dateOfBirth}
        nationality={dummyFriendData.nationality}
        description={dummyFriendData.description}
        meetingDates={dummyFriendData.meetingDates}
        howMet={dummyFriendData.howMet}
        Images={dummyFriendData.Images}
        profilePic={dummyFriendData.profilePic}
      />
    </div>
  );
}