import React, { Component } from "react"


class About extends Component {
    render() {
        return (
            <>   
                (" ")
                <div className="card" style={{
                        position: "absolute",
                        top: "70px",
                        borderRadius:"12px",
                        width: "100%",
                }}>
                    <div className="card-header">
                        <div className="card-title h5"><strong>Develpoment Team</strong></div>
                        <div className="card-subtitle">We are a team of software developers who also have a passion for crypto.</div>
                    </div>
                    <div className="card-body">
                        <ul style={{
                            listStyle:"none",
                        }}>
                            <li>
                                <strong>Team Structor:</strong>
                            </li>
                            <li>
                                Front-End Team Members:<strong style={{
                                    display:"block",
                                }}>Paul Fodrovics</strong> 
                                   <strong>Long Nguyen </strong>
                                                        
                                                        
                            </li>
                            <li>
                                Back-End Team Memebers: <strong style={{
                                    display:"block",
                                }}>Trion Bailey</strong> 
                                                        <strong>Edwin Genova </strong>
                                                       
                            </li>

                        </ul>
                    </div>
                </div>
            </>
        
                );
            }
            
            
            }
            
export default About