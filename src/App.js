import React, { useEffect, useState } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import CurrencyTraker from "./components/CurrencyTracker/CurrencyTraker";
import AppContext from "./context/AppContext";

import request from "./helpers/request";

import "./reset.css";
import DetailsView from "./views/DetailsView/DetailsView";
import Portfolio from "./views/Portfolio/Portfolio";
import PriceTag from "./components/PriceTag/PriceTag";
import Chart from "./components/Chart/Chart";
import { AppContainer, StyledLink } from "./components/StyledApp/StyledApp";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [myCurrency, setMyCurrency] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      request.get().then((res) => {
        if (res.status === 200) {
          setCurrencyList([...res.data]);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currencyList]);

  useEffect(() => {
    let totalValue = 0;
    if (myCurrency.length !== 0) {
      myCurrency.forEach((element) => {
        const actualPriceItem = currencyList.find(
          (item) => item.name === element.name
        );
        console.log(element.quantity);
        totalValue += element.quantity * actualPriceItem.current_price;
      });
      console.log(totalValue);
      setTotalValue(totalValue);
    }
    console.log(totalValue);
  }, [myCurrency, currencyList]);

  const addToPortfolio = (obj) => {
    setMyCurrency([...myCurrency, obj]);
  };

  return (
    <AppContext.Provider
      value={{ myCurrency, currencyList, addToPortfolio, totalValue }}
    >
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
              <Chart />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </AppContext.Provider>
  );
}

export default App;
