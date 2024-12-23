"use client";

import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 98,
    fill: "white",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 w-full h-full">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Student</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20}></Image>
      </div>
      {/* chart */}
      <div className="w-full h-[70%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="maleFemale"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* button */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
          <span className="font-bold">1,234</span>
          <span className="text-sx text-gray-300">Boys (55%)</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
          <span className="font-bold">1,234</span>
          <span className="text-sx text-gray-300 ">Girls (45%)</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
