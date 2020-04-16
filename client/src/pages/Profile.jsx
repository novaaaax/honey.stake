import React, { Component } from "react"
import axios from "axios"

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            errors: {}
        }
        this.handleLoad = this.handleLoad.bind(this)
    }
    handleLoad(event) {
        event.preventDefault();
        axios.post("/api/login/:id", {
            first_name: this.state.first_name
        }).then(response => {
            console.log(response)
            if (response.data) {
                console.log(response.data)
                this.setState({
                    errors: response.data
                })
            }
        }).catch(err => {
            this.setState({
                errors: err
            })
        })
    }
    render() {
        return (
            <div>
                <p onLoad={this.handleLoad}>{this.state.first_name}</p>
            </div>
        );
    }


}

export default Profile