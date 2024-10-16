import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";

const promise = loadStripe("pk_test_51Q9oJGRqxwzhN6aWUfjlnziQfvz3G32fbKCF5n7TR0P2a3yeBtFt3NzgKwFIG4HRoQQ4e6HamG6dORPc3PrJamak00YrxX1KsB");


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only runs once when the app conponent loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Checkout Route */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route exact path="/payment"
            element={
              <>

                <Header />
                <Elements stripe={promise}>
                <Payment />

                </Elements>
              </>
            }
          />

          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
