import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function Bargf(props) {
  let data = props.data;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label" style={{color:"black",padding:"10px"}}>{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <BarChart
      width={350}
      height={150}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="value" fill="#223343" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
