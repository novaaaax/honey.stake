import React from 'react';
import { Router } from "@reach/router";


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
import Logout from "./pages/Logout";
import logo from './components/logo.svg';
import homeIcon from "./components/home-outline.svg"
import Crypto from "./components/cash-outline.svg"




function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: homeIcon
    },
    {
      text: "Cryptocurrencies",
      path: "/crypto",
      icon:  Crypto 
    },
    {
      text: "Cardano",
      path: "/cardano",
      icon: logo
    },
    {
      text: "Staking Service",
      path: "/staking",
      icon: "bx-bx-music "
    },
    {
      text: "About",
      path: "/about",
      icon: "wpf-business-contact "
    },
    {
      text: "Contact",
      path: "/contact ",
      icon: ""
    },
    {
      text: "SignUp",
      path: "/signup ",
      icon: ""
    },
    {
      text: "Login",
      path: "/login",
      icon: "mdi-login"
    },
    {
      text: "Logout",
      path: "/logout",
      icon: "bx-bx-log-out "
    }


  ]


  return (


    <div className="App">
      <ResponsiveNavigation
        navLinks= { navLinks }
        logo= { logo }
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
        
      />
    
      
      <Router>
        <Home path="/" />
        <Cryptocurrencies path="Cryptocurrencies" />
        <Cardano path="Cardano" />
        <StakingService path="Staking" />
        <About path="About" />
        <Contact path="Contact" />
        <Login path="Login" />
        <Logout path="Logout" />
        <SignUp path="SignUp" />

      </Router>

    </div>



  );




}



export default App;
