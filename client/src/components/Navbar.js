import React from "react";
import { NavLink } from 'react-router-dom';


export default function Narbar(){
    return(
        <div>
            <nav style={{
                backgroundColor: "Black",
                paddingTop: "15px",
                paddingBottom: "15px",
                textAlign: "center"
            }}>
                <NavLink to="/" style={{
                    color: "white",
                    marginRight: "5px"
                }}>Home</NavLink>
                <NavLink to="/learncrypto" style={{
                    color: "white",
                    marginRight: "5px"
                }}>Learn Crypto</NavLink>
                <NavLink to="/markets" style={{
                    color: "white",
                    marginRight: "5px"
                }}>Crypto Markets</NavLink>
                <NavLink to="/about" style={{
                    color: "white",
                    marginRight: "5px"
                }}>About</NavLink>
            </nav>
        </div>
    ); 
}