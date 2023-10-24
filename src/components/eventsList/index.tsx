import eventsData from "@/assets/eventsDummyData";
import { eventMotions } from "@/lib/motion";
import { EventTypesList, eventType } from "@/types/events";
import { motion } from "framer-motion";
import { CalendarCheck, CalendarClock, CalendarDays } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import React from "react";
import { DatePickerWithRange } from "../ui/date-picker-with-range";
import { DropdownCountryList } from "./CountryList";

export default function Events() {
  return (
    <div className="">
      <div className="flex space-x-2 border-b-2 border-gray-600 mb-2">
        <DatePickerWithRange /> <DropdownCountryList />
      </div>
      {eventsData.map((item: eventType, index) => (
        <motion.nav
          key={index}
          variants={eventMotions}
          initial="hidden"
          whileInView="show"
        >
          <div
            key={index}
            className="bg-white opacity-100 rounded-md flex p-2 space-x-4 my-3"
          >
            <Link className="flex space-x-3" href={`/event-details/${item.id}`}>
              <div>
                {item.type === EventTypesList.ComingEvents ? (
                  <CalendarClock />
                ) : item.type === EventTypesList.PastEvents ? (
                  <CalendarCheck />
                ) : (
                  <CalendarDays />
                )}
              </div>

              <div>{item.details}</div>
            </Link>
          </div>
        </motion.nav>
      ))}
    </div>
  );
}
