"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];
const EventCalander = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md p-4 w-full">
      <Calendar onChange={onChange} value={value} />
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg my-4">Events</h1>
        <Image src="./moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((events) => (
          <div
            className="p-5 rounded-md border-gray-100 border-2 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={events.id}
          >
            <div className="flex items-center justify-between ">
              <h1 className="font-semibold text-gray-600">{events.title}</h1>
              <span className="text-gray-300 text-xs">{events.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{events.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalander;
