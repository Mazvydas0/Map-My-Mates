import eventsData from "@/assets/eventsDummyData";
import { eventMotions } from "@/lib/motion";
import { EventTypesList, eventType } from "@/types/events";
import { motion } from "framer-motion";
import { CalendarCheck, CalendarClock, CalendarDays } from "lucide-react";
import React from "react";

export default function Events() {
  return (
    <div>
      {eventsData.map((item: eventType, index) => (
        <motion.nav
          key={index}
          variants={eventMotions}
          initial="hidden"
          whileInView="show"
        >
          <div className="bg-white opacity-100 rounded-md flex p-2 space-x-4 my-3">
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
          </div>
        </motion.nav>
      ))}
    </div>
  );
}
