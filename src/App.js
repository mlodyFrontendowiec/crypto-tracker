import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CurrencyTraker from "./components/CurrencyTracker/CurrencyTraker";

import request from "./helpers/request";

import "./reset.css";

function App() {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    request.get().then((res) => {
      if (res.status === 200) {
        setCurrencyList([...res.data]);
      }
    });
  }, []);

  return (
    <AppContainer>
      <CurrencyTraker currencyList={currencyList} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #19181c;
  margin: 0;
  padding: 0;
  height: auto;
  min-height: 100vh;
`;

export default App;
