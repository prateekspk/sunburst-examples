import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  {
    name: "Group A",
    value: 400,
    children: [
      { name: "Subgroup A1", value: 200 },
      { name: "Subgroup A2", value: 200 }
    ]
  },
  {
    name: "Group B",
    value: 300,
    children: [
      { name: "Subgroup B1", value: 100 },
      { name: "Subgroup B2", value: 100 },
      { name: "Subgroup B3", value: 100 }
    ]
  },
  {
    name: "Group C",
    value: 300,
    children: [
      { name: "Subgroup C1", value: 100 },
      { name: "Subgroup C2", value: 100 },
      { name: "Subgroup C3", value: 100 }
    ]
  }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DrilldownPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        innerRadius={50}
        activeIndex={activeIndex}
        activeShape={(props) => {
          const {
            cx,
            cy,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            fill
          } = props;

          return (
            <g>
              <path
                d={`M${cx},${cy - innerRadius}L${cx},${
                  cy - outerRadius
                }A${outerRadius},${outerRadius},0,1,1,${cx - 0.01},${
                  cy - outerRadius
                }L${cx - 0.01},${cy - innerRadius}Z`}
                fill={fill}
              />
              <path
                d={`M${cx},${
                  cy - innerRadius
                }A${innerRadius},${innerRadius},0,0,0,${cx - 0.01},${
                  cy - innerRadius
                }`}
                fill={fill}
                stroke={fill}
              />
              <path
                d={`M${cx},${
                  cy - outerRadius
                }A${outerRadius},${outerRadius},0,0,0,${cx - 0.01},${
                  cy - outerRadius
                }`}
                fill={fill}
                stroke={fill}
              />
            </g>
          );
        }}
        onClick={handleClick}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend layout="vertical" align="right" verticalAlign="middle" />
    </PieChart>
  );
};

export default DrilldownPieChart;
