"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";

import { calendarEvents } from "@/lib/data";
import moment from "moment";
import { useState } from "react";

moment.locale("zh-CN");
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2024, 0, 1, 8, 0, 0)}
      max={new Date(2024, 11, 31, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
