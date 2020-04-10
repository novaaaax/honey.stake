import React from "react";
import { NavLink } from 'react-router-dom';


<<<<<<< HEAD
export default function Narbar(){
    return(
=======
export default function Narbar() {
    return (
>>>>>>> 53f8478526883b0028afb7e2907604ab9ab9654d
        <div>
            <nav style={{
                backgroundColor: "Black",
                paddingTop: "15px",
                paddingBottom: "15px",
                textAlign: "center"
            }}>
                <NavLink to="/" style={{
                    color: "white",
<<<<<<< HEAD
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
=======
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Home</NavLink>
                <NavLink to="/learncrypto" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Learn Crypto</NavLink>
                <NavLink to="/markets" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Crypto Markets</NavLink>
                <NavLink to="/about" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>About</NavLink>
                <NavLink to="/signup" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Sign Up</NavLink>
            </nav>
        </div>
    );
>>>>>>> 53f8478526883b0028afb7e2907604ab9ab9654d
}