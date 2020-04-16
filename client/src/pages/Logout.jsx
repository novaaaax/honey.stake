import React, { Component } from "react"
import axios from 'axios'


class Logout extends Component {
    constructor(props){
        super(props)
        this.state = {
            endSession: {}
        }
        this.handleSession = this.handleSession.bind(this)
    }

    handleSession(){
        axios.post('/api/logout', {
            
        })
    }


render() {
return(
    <div>Logout</div>




)
}


}

export default Logout
