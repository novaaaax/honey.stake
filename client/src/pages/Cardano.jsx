import React, { Component } from "react"
// import cardano from "./components/cardano.svg/"
import cardano from "../components/assets/img/cardanologo.jpg"

class Cardano extends Component {
    render() {
        return (

            <div className="master">


                <div className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <div className="column1">
                           
                            <h1>Cardano</h1>
                            <div >
                                <img src={cardano} align="right"></img>
                            </div>
                        </div>

                    </div>



                </div>
            </div>



        )
    }


}

export default Cardano