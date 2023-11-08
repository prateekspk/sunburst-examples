import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  {
    name: "Parent 1",
    value: 500,
    children: [
      { name: "Child 1", value: 300 },
      { name: "Child 2", value: 200 }
    ]
  },
  {
    name: "Parent 2",
    value: 800,
    children: [
      { name: "Child 3", value: 400 },
      { name: "Child 4", value: 200 },
      { name: "Child 5", value: 200 }
    ]
  }
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#00C2FF",
  "#FF66CC",
  "#FFA500"
];

const ParentChildPieChart = () => {
  const [activeParent, setActiveParent] = useState(null);

  const handleClick = (data, index) => {
    if (data.children) {
      setActiveParent(data);
    }
  };

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload
    } = props;
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Pie
          data={payload.children}
          dataKey="value"
          nameKey="name"
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          innerRadius={innerRadius + 10}
          fill={fill}
          labelLine={false}
        >
          {payload.children.map((entry, index) => (
            <Cell key={`child-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </g>
    );
  };

  return (
    <PieChart width={600} height={400} onClick={() => setActiveParent(null)}>
      <Pie
        activeIndex={activeParent ? 0 : -1}
        activeShape={renderActiveShape}
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        labelLine={false}
        onClick={handleClick}
      >
        {data.map((entry, index) => (
          <Cell key={`parent-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ParentChildPieChart;
