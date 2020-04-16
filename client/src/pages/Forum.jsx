import React, { Component } from "react"
import axios from "axios"

class Forum extends Component {
    constructor(props) {
        super(props)


        this.state = {
            question: "",
            answer: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log("handle change", event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('form submitted')
        event.preventDefault();
        axios.post('/api/forum', {
            question: this.state.question,
            answer: this.state.answer
        }).then(response => {
            console.log(response)
            if (response.data) {
                console.log('form submitted')
                this.setState({
                    redirectTo: "/login",
                    errors: response.data
                })
            }
        }).catch(err => {
            //this is where i left off
            console.log(err)
            this.setState({
                errors: err
            })
        })
    }
    render(){
        return(
            <div onSubmit={this.handleSubmit} className="container column col-4 col-xs-12"
            style={{
                paddingTop: "100px"
            }}>
            <form className="form-group">
                <label className="form-label" for="input-example-1">Qustion</label>
                <input className="form-input" type="text" name="question" value={this.state.question} id="input-example-1" onChange={this.handleChange} placeholder="Question" required />
                <label className="form-label" for="input-example-1">Answer</label>
                <input className="form-input" type="text" name="answer" value={this.state.answer} id="input-example-1" onChange={this.handleChange} placeholder="Answer" required />
                {this.state.errors.passwordDoesNotMatch && <small>{this.state.errors.passwordDoesNotMatch}</small>}
                <button
                    type="submit"
                    style={{
                        marginTop: "10px"
                    }}
                >Post</button>
            </form>
        </div>
        )
    }
}