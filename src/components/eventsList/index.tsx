import { eventMotions } from "@/lib/motion";
import { motion } from "framer-motion";
import { CalendarCheck, CalendarClock, CalendarDays } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { DatePickerWithRange } from "../ui/date-picker-with-range";
import AddNewEvent from "./AddNewEvent";
import { Events } from "@prisma/client";

interface EventsProps {
  eventData: Events[];
}

export default function Events({ eventData }: EventsProps) {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [filteredEvents, setFilteredEvents] =
    React.useState<Events[]>(eventData);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(
    null
  );
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [searchedCountry, setSearchedCountry] = React.useState<string>("");

  // use useCallback to memoize filtered Events
  const filterEvents = useCallback(
    (start: Date | null, end: Date | null, country: string | null) => {
      const filtered = eventData?.filter((event: any) => {
        const eventDate = new Date(event?.date);
        const currentDate = new Date();

        // checking if the date of event is in the future
        const isFutureEvent = eventDate >= currentDate;

        const isDateInRange =
          (!start || eventDate >= start) && (!end || eventDate <= end);

        const isCountryMatch =
          !country ||
          (event?.country !== null &&
            event?.country?.toLowerCase().includes(country?.toLowerCase()));

        return isFutureEvent && isDateInRange && isCountryMatch;
      });

      setFilteredEvents(filtered);
    },
    [eventData]
  );

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCountry(event.target.value);
  };

  useEffect(() => {
    filterEvents(startDate, endDate, searchedCountry);
  }, [filterEvents, startDate, endDate, searchedCountry]);

  const handleDateChange = (dates: any) => {
    setStartDate(dates?.from);
    setEndDate(dates?.to);
  };

  return (
    <div className="">
      <div className="flex space-x-2 border-b-2 border-gray-600 mb-2">
        <DatePickerWithRange onChange={handleDateChange} />
        <input
          type="text"
          placeholder="Enter country name"
          value={searchedCountry}
          onChange={handleCountryChange}
          className="border rounded px-2 py-1 w-24
          "
        />
      </div>
      {filteredEvents?.length > 0 || showAllEvents ? (
        (showAllEvents ? eventData : filteredEvents).map((item, index) => (
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
              <Link
                className="flex space-x-3"
                href={`/event-details/${item.id}`}
              >
                <div>
                  {item.name ? (
                    <CalendarClock />
                  ) : item.name ? (
                    <CalendarCheck />
                  ) : (
                    <CalendarDays />
                  )}
                </div>
                <div>{item?.name}</div>
              </Link>
            </div>
          </motion.nav>
        ))
      ) : (
        <div className="text-center text-gray-500 my-4">
          {startDate || endDate || selectedCountry
            ? "No filtered data found for the selected date and country."
            : "No events available."}
        </div>
      )}

      <div className="absolute bottom-10">
        <AddNewEvent />
      </div>
    </div>
  );
}
