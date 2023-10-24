import FriendDetails from "@/components/friendDetails";
import dummyFriendData from "@/assets/dummyFriendData";

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
