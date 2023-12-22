import EventDetails from "@/components/eventDetails";
import { getEventOwnerDetails } from "@/app/actions/getEventOwnerDetails";
import {
  getEventDetailsByID,
  getEventDetailsByIDProps,
} from "@/app/actions/getEventDetailsById";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function page({
  params,
}: {
  params: getEventDetailsByIDProps;
}) {
  const currentUser: any = await getCurrentUser();
  const getEventOwner = await getEventOwnerDetails(params);
  const getEventDetails = await getEventDetailsByID(params);

  return (
    <div>
      <EventDetails
        details={getEventDetails?.detail}
        type={getEventDetails?.city}
        id={getEventDetails?.id}
        name={getEventDetails?.name}
        city={getEventDetails?.city}
        location={getEventDetails?.city}
        profile={getEventDetails?.eventImage}
        EventOwner={getEventOwner}
        EventDetails={getEventDetails}
        currentUser={currentUser}
        params={params}
      />
    </div>
  );
}
