import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import profile from "/public/profile.png";
import { Button } from "../ui/button";

export default function FriendsPopupCard({
  name,
  location,
  profile,
  metPlace,
  details,
}: any) {
  console.log("Friends popup Cards =====", name, profile, location);
  return (
    <div className="p-2 h-64 flex flex-col ">
      <div className=" rounded-full">
        <img
          alt=""
          className="h-24 w-24 object-cover rounded-full object-top"
          src={profile}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <div className="h-4 w-[200px] font-bold text-[#0a3d62] text-xl my-3">
          {name}
        </div>
        <div className="h-4 flex space-x-3">
          <p>Met In:</p>
          <p className="font-bold">{metPlace}</p>
        </div>
        <div className="h-4 w-[200px]">{details}</div>
      </div>
      <Button
        className="self-end mt-10 w-20 py-2 px-4 bg  text-[#0a3d62] 
        hover:bg-[#0a3d62] bg-white hover:text-white rounded"
      >
        {" "}
        Details
      </Button>
      {/* <button className="self-end mt-10 w-20 py-2 px-4  text-[#0a3d62] 
        hover:bg-[#0a3d62] hover:text-white rounded ">Details</button> */}
    </div>
  );
}
