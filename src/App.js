import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Learncrypto from './components/Learncrypto';
import Cryptomarkets from './components/Cryptomarkets';
import About from './components/About';



function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/learncrypto" component={Learncrypto}></Route>
      <Route path="/markets" component={Cryptomarkets}></Route>
      <Route path="/about" component={About}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
