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
            
            <div onSubmit={this.handleSubmit} className="container"style={{
                paddingTop: "60px",
                textAlign:"center",
            
                
            }}>
               <h1 style={{
                   fontSize:"40px",
                   marginTop:"20px"
               }}
               >Hello {this.state.first_name}</h1> 
               <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3hESwg2C1h208A1VDc1hglIOGz_rWrqtMxcyQHzd5VUBAYhd_&usqp=CAU" alt="profilepic" style={{
                        borderRadius:"100px",
                        position:"relative"
                    }}/>
                 <h3>Bio:</h3> 
                 <p className="container"style={{
                     maxWidth:"400px",
                     align:"center",
                 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum quas eos, vel voluptates consequatur sed nemo, exercitationem et unde minus distinctio iure iste maxime eaque officiis accusantium! Deserunt, placeat.</p>
                </div>
                <button type="submit">Logout</button>
            </div>
        );
    }


}

export default Profile