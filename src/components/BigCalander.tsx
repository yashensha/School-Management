"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalander = () => {
  const [view, setview] = useState<View>(Views.WORK_WEEK);
  const handlechangeview = (selectedView: View) => {
    setview(selectedView);
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "98%" }}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      views={["work_week", "day"]}
      view={view}
      onView={handlechangeview}
    />
  );
};
export default BigCalander;
