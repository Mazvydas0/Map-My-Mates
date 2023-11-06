import friendsPins from "@/assets/FriendsPinsData";
import Image from "next/image";
import React from "react";
import { Chat } from "./Chat";

export default function ChatList() {
  return (
    <div>
      {friendsPins.map((friend: any, index: any) => (
        <div
          key={index}
          className="bg-white hover:bg-slate-300 opacity-100 justify-evenly rounded-md flex p-2 space-x-4 my-3"
        >
          <Chat name={friend.name} img={friend.profile} />
          {/* <div className=''>
            <Image className='rounded-full' width={20} height={20} alt='chaticon' src={friend.profile}/>
          </div>
          <div>{friend.name}</div>
          <div className='flex'><p className='text-green-600 -mt-6 text-5xl font-bold'>.</p> online</div> */}
        </div>
      ))}
    </div>
  );
}
