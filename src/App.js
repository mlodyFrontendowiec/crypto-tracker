import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import CurrencyTraker from "./components/CurrencyTracker/CurrencyTraker";
import AppContext from "./context/AppContext";

import request from "./helpers/request";

import "./reset.css";
import DetailsView from "./views/DetailsView";
import Portfolio from "./components/Portfolio/Portfolio";
import PriceTag from "./components/PriceTag/PriceTag";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [myCurrency, setMyCurrency] = useState([]);

  useEffect(() => {
    request.get().then((res) => {
      if (res.status === 200) {
        setCurrencyList([...res.data]);
      }
    });
  }, []);

  const addToPortfolio = (obj) => {
    setMyCurrency([...myCurrency, obj]);
  };

  return (
    <AppContext.Provider value={{ myCurrency, addToPortfolio }}>
      <AppContainer>
        <Router>
          <Switch>
            <Route path="/" exact>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
              <CurrencyTraker currencyList={currencyList} />
              <PriceTag />
            </Route>
            <Route path="/cryptocurrency/:name" exact>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
              <DetailsView
                currencyList={currencyList}
                setCurrencyList={setCurrencyList}
              />
            </Route>
            <Route to="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </AppContext.Provider>
  );
}

const AppContainer = styled.div`
  background-color: #19181c;
  margin: 0;
  padding: 0;
  height: auto;
  min-height: 100vh;
`;

const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  top: 20px;
  right: 20px;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 20px;
  :hover {
    color: #7811f7;
  }
`;

export default App;
