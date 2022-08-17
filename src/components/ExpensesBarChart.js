import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import ExpensesTooltip from "./ExpensesTooltip";

const ExpensesBarChart = ({ className }) => {
  const data = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  let highAmt = data[0].amount;
  data.map((item) => {
    if (item.amount > highAmt) {
      highAmt = item.amount;
    }
    return item;
  });

  return (
    <ResponsiveContainer width="100%" height={300} className={className}>
      <BarChart data={data} onMouseLeave={() => setActiveIndex(-1)}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} opacity="0.8" />
        <YAxis hide />
        <Tooltip
          content={<ExpensesTooltip />}
          cursor={false}
          wrapperStyle={{ background: "none" }}
          coordinate={{ x: 100, y: 400 }}
        />
        <Bar
          dataKey="amount"
          fill="var(--Soft-red)"
          radius={5}
          cursor="pointer"
        >
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={
                entry.amount === highAmt ? "var(--Cyan)" : "var(--Soft-red)"
              }
              opacity={index === activeIndex ? "0.5" : "1"}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpensesBarChart;
