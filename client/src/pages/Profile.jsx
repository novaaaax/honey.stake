import React, { Component } from "react"
import axios from "axios"

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    componentWillMount() {
        this.setState({
            first_name: localStorage.getItem("firstName")
        })
    }
    handleSubmit() {
        axios.post("/api/logout", {

        })
            .then(response => {
                console.log('logged out')
                console.log(response)
                localStorage.clear()
            })
    }
    render() {
        return (
            <div onSubmit={this.handleSubmit} style={{
                paddingTop: "60px"
            }}>
                <h1>Hello {this.state.first_name}</h1>

                <button type="submit">Logout</button>
            </div>
        );
    }


}

export default Profile