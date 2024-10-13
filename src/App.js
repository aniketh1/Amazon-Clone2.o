import React from "react"
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"

import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    //Bem
    <Router>
      <div className="App">
        {/* <Header/>
        <Home/> */}

        <Switch>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
