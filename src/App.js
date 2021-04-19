import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CurrencyList from "./components/CurrencyList/CurrencyList";
import SearchInput from "./components/SearchInput/SearchInput";
import AppContext from "./context/AppContext";

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
    <AppContext.Provider value={currencyList}>
      <AppContainer>
        <SearchInput />
        <CurrencyList />
      </AppContainer>
    </AppContext.Provider>
  );
}

const AppContainer = styled.div`
  background-color: #19181c;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export default App;
