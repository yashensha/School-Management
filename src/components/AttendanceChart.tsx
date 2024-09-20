"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import Image from "next/image";

const data = [
  {
    name: "Mon",
    present: 43,
    absent: 23
  },
  {
    name: "Tue",
    present: 54,
    absent: 23
  },
  {
    name: "Wed",
    present: 43,
    absent: 23
  },
  {
    name: "Thu",
    present: 43,
    absent: 23
  },
  {
    name: "Fri",
    present: 12,
    absent: 32
  }
];
const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {" "}
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Attendance</h1>
        <Image src="./moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#fae17e"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#c3eaf8"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
