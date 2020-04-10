import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Learncrypto from './components/Learncrypto';
import Cryptomarkets from './components/Cryptomarkets';
import About from './components/About';
<<<<<<< HEAD
=======
import Signup from './components/Sign-up';
>>>>>>> 53f8478526883b0028afb7e2907604ab9ab9654d



function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/learncrypto" component={Learncrypto}></Route>
      <Route path="/markets" component={Cryptomarkets}></Route>
      <Route path="/about" component={About}></Route>
<<<<<<< HEAD
=======
      <Route path="/signup" component={Signup}></Route>
>>>>>>> 53f8478526883b0028afb7e2907604ab9ab9654d
    </Switch>
    </BrowserRouter>
  );
}

export default App;
