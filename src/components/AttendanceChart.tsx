"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Image from "next/image";

const AttendanceChart = () => {
  const data = [
    {
      name: "Mon",
      present: 10,
      absent: 2,
    },
    {
      name: "Tue",
      present: 10,
      absent: 2,
    },
    {
      name: "Wed",
      present: 10,
      absent: 2,
    },
    {
      name: "Thu",
      present: 10,
      absent: 2,
    },
    {
      name: "Fri",
      present: 10,
      absent: 2,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {/* chart  */}
      <div className="h-[90%] w-full">
        <ResponsiveContainer>
          <BarChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#d1d5db" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#d1d5db" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "lightgray",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
              }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
