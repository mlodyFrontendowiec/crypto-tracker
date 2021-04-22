import React, { useContext, useEffect, useState } from "react";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

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
  const portfolioCurrencyList = [];
  const reduceArray = () => {
    myCurrency.forEach((element) => {
      console.log(portfolioCurrencyList.length);
      if (portfolioCurrencyList.length === 0) {
        portfolioCurrencyList.push(element);
      } else {
        portfolioCurrencyList.every((item) => {
          if (element.name === item.name) {
            item.value += element.value.toFixed(2);
            return false;
          } else if (element.name !== item.name) {
            portfolioCurrencyList.push(element);
            return false;
          }
        });
      }
      setPortfolioCurrency(portfolioCurrencyList);
    });
  };
  useEffect(() => {
    reduceArray();
  }, [myCurrency]);
  const data01 = [...portfolioCurrency];
  return (
    <StyledChartContainer>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart width="90%" height="80%" style={{ overflow: "hidden" }}>
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

const StyledChartContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export default Chart;
