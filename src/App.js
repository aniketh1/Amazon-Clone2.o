import React from "react"
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"

import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";

function App() {
  return (
    //Bem
    <Router>
      <div className="App">
        {/* <Header/>
        <Home/> */}
        <Header />

        <Switch>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
