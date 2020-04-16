import React from "react";
import ReactDOM from "react-dom";
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import App from "./App";
import axios from 'axios'
import "./components/assets/scss/base.scss";


// const setAuthToken = token => {
//     if(token){ 
//        axios.defaults.headers.common['Authorization'] = token
//     }else {
//         delete axios.defaults.headers.common['Authorization']
//     }
// }

// if(localStorage.jwtToken){
//     setAuthToken()
// }

ReactDOM.render(<App />, document.getElementById("root"));
