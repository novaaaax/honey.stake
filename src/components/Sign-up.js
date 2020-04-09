import React from 'react';
import axios from 'axios';


export default class Signup extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email: "",
            password: "",
            password_conformation: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        
    }
    render(){
    return (
        <div className="container column col-4 col-xs-12">
            <div className="form-group">
                <label className="form-label" for="input-example-1">Email</label>
                <input className="form-input" type="text" id="input-example-1" placeholder="Email" />
                <label className="form-label" for="input-example-1">Password</label>
                <input className="form-input" type="text" id="input-example-1" placeholder="Password" />
                <button
                style={{
                    marginTop: "10px"
                }}
                >Sign Up</button>
            </div>
        </div>
    );
            }
}