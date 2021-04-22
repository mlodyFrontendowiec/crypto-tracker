import React, { useContext, useEffect, useState } from "react";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import AppContext from "../../context/AppContext";
import { StyledChartContainer } from "./StyledChartContainer";
import "./chart.css";

const Chart = () => {
  const { myCurrency } = useContext(AppContext);
  const [portfolioCurrency, setPortfolioCurrency] = useState([]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#6E44FF",
    "#CDEFAC",
    "#FFE033",
    "#1DA4C9 ",
    "#4F21B2 ",
    "#39B29E ",
  ];

  useEffect(() => {
    const actualList = [];
    const holder = {};
    if (myCurrency.length === 0) {
      actualList.push(...myCurrency);
    } else {
      myCurrency.forEach(function (d) {
        if (holder.hasOwnProperty(d.name)) {
          holder[d.name] = holder[d.name] + parseFloat(d.value.toFixed(2));
        } else {
          holder[d.name] = parseFloat(d.value.toFixed(2));
        }
      });

      for (var prop in holder) {
        actualList.push({ name: prop, value: holder[prop] });
      }
      console.log(actualList);
      setPortfolioCurrency(actualList);
    }
  }, [myCurrency]);

  const data01 = [...portfolioCurrency];
  return (
    <StyledChartContainer>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart width="90%" height="80%">
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#0f9200"
            label
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
};

export default Chart;
