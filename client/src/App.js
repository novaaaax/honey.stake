import React from 'react';
import { Router } from "@reach/router";
import "./components/assets/scss/home.scss";

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Cryptomarkets from './components/Cryptomarkets';


import ResponsiveNavigation from "./components/ResponsiveNavigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Cardano from "./pages/Cardano";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import StakingService from "./pages/StakingService";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import Logout from "./pages/Logout";
import cardano from './components/cardano.svg';
// import homeIcon from "./components/home-outline.svg"
// import Crypto from "./components/cash-outline.svg"
import stake from "./components/stakeholder.svg"
import logo from "./components/logo.svg"
import team from "./components/team.svg"
import wallet from "./components/wallet.svg"
import home from "./components/home.svg"
import blockchain from "./components/blockchain.svg"
import contact from "./components/contact.svg"
import login from "./components/login.svg"
import logout from "./components/logout.svg"
import signup from "./components/sign-up.svg"


function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: home
    },
    {
      text: "Cryptocurrencies",
      path: "/crypto",
      icon:  blockchain 
    },
    {
      text: "Cardano",
      path: "/cardano",
      icon: cardano
    },
    {
      text: "Staking Service",
      path: "/staking",
      icon: stake
    },
    {
      text: "Wallets",
      path: "/wallets",
      icon: wallet
    },
    {
      text: "About",
      path: "/about",
      icon: team
    },
    {
      text: "Contact",
      path: "/contact ",
      icon: contact
    },
    {
      text: "SignUp",
      path: "/signup ",
      icon: signup
    },
    {
      text: "Login",
      path: "/login",
      icon: login
    },
    {
      text: "Logout",
      path: "/logout",
      icon: logout
    }


  ]
  // function toggle()

  return (


    <div className="App">
      <ResponsiveNavigation
        navLinks= { navLinks }
        logo= { logo }
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
        
      />

    
      {/* <div className="mob"> */}

      <Router>
        <Home path="/" />
        <Cryptocurrencies path="/crypto" />
        <Cardano path="/cardano" />
        <StakingService path="/staking" />
        <About path="/about" />
        <Contact path="/contact" />
        <Login path="/login" />
        {/* <Logout path="/logout" /> */}
        <SignUp path="/signup" />

      </Router>
      {/* </div> */}
    </div>



  );




}



export default App;
