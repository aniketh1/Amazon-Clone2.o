import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    //will only runs once when the app conponent loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>',authUser);
      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      } else {

        dispatch({
          type:'SET_USER',
          user:null
        })
      }

    })
  },[])
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
