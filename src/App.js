import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CurrencyTraker from "./components/CurrencyTracker/CurrencyTraker";

import request from "./helpers/request";

import "./reset.css";
import DetailsView from "./views/DetailsView";

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
      <Router>
        <Switch>
          <Route path="/" exact>
            <CurrencyTraker currencyList={currencyList} />
          </Route>
          <Route path="/cryptocurrency/:name" exact>
            <DetailsView currencyList={currencyList} />
          </Route>
        </Switch>
      </Router>
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
