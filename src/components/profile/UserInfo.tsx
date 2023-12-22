import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown, Info } from "lucide-react";
import { User } from "@prisma/client";
import React, { use } from "react";

interface UserInfoProps {
  currentUser: User;
}

export default function UserInfo({ currentUser }: UserInfoProps) {

  return (
    <div className="mt-20">
      <Accordion className="" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-between hover:bg-slate-200 bg-white transition-all w-full duration-200 px-3 mt-6">
            <span className="flex items-center gap-8">
              <Info size={28} fill="gray" stroke="white" /> Info
            </span>
            <ChevronDown className="text-xl self-end" />
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <table className="w-full text-sm mt-2">
                <tr>
                  <td className="w-1/3 font-medium bg-emerald-700/20 p-1.5">
                    Name
                  </td>
                  <td className="w-2/3 bg-stone-300/20 p-1.5">
                    {currentUser?.firstName}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 font-medium bg-emerald-700/20 p-1.5">
                    Last Name
                  </td>
                  <td className="w-2/3 bg-stone-300/20 p-1.5">
                    {currentUser?.lastName}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 font-medium bg-emerald-700/20 p-1.5">
                    Address
                  </td>
                  <td className="w-2/3 bg-stone-300/20 p-1.5">
                    {currentUser?.address}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 font-medium bg-emerald-700/20 p-1.5">
                    Nationality
                  </td>
                  <td className="w-2/3 bg-stone-300/20 p-1.5">
                    {currentUser?.Nationality}
                  </td>
                </tr>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
