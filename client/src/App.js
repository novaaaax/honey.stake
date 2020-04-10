import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Learncrypto from './components/Learncrypto';
import Cryptomarkets from './components/Cryptomarkets';
import About from './components/About';
import Signup from './components/Sign-up';



function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/learncrypto" component={Learncrypto}></Route>
      <Route path="/markets" component={Cryptomarkets}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/signup" component={Signup}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
