import React from "react";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default class Cryptomarkets extends React.Component{
    state = {
        cryptoInfo: []
    }
    componentDidMount(){
        console.log("component mounted");
        var key = process.env.APIKey
        // eslint-disable-next-line no-useless-concat
        var URL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR' + `&api+key=${key}`;

        axios.get(URL)
        .then(res => {
            console.log(res)
            this.setState({
                cryptoInfo: res.data
            })
            console.log(this.state.cryptoInfo)
        })
    }
    render(){
        return(
<<<<<<< HEAD
            <div>
            </div>
=======
            <div></div>
        // <div>{this.state.cryptoInfo.map(cryptoInfo => <div>{cryptoInfo}</div>)}</div>
>>>>>>> 53f8478526883b0028afb7e2907604ab9ab9654d
        )
    }
}