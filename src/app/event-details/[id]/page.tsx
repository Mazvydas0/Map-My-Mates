import FriendDetails from "@/components/friendDetails";

import EventDetails from "@/components/eventDetails";
import eventsData from "@/assets/eventsDummyData";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <EventDetails
        details={eventsData[0].details}
        type={eventsData[0].type}
        id={eventsData[0].id}
        name={eventsData[0].name}
        city={eventsData[0].city}
        location={eventsData[0].location}
        profile={eventsData[0].profile}
      />
    </div>
  );
}
