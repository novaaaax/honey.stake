import React, { Component } from "react"


class Home extends Component {
render() {
    return (
        <>
            <div style={{
                paddingTop:"120px",
                backgroundColor: "#333",
                color: "#black",
                borderRadius: "25px",
                textAlign: "center"
            }} className="hero column col-11 col-xs-12 container">
                <h1>Welcome to Solve Staking</h1>
                <h3>Your new go to site for all your cryptocurrency questions!</h3>
            </div>

            <div className="form-group">
                <div className="col-3">
                    <label className="form-label" textalign="center" htmlFor="input-example-8">Sign up for our newsletter</label>
                </div>
                <div className="col-9">
                    <input className="form-input" id="input-example-8" type="email" placeholder="Email" defaultValue="johndoe@example.com" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" />
                </div>
            </div>

            <div className="docs-demo columns">
                <div className="column col-12">
                    <div className="empty">
                        <div className="empty-icon">
                            <i className="icon icon-people"></i>
                        </div>
                        <p className="empty-title h5">You have no new messages</p>
                        <p className="empty-subtitle">Click the button to start a conversation.</p>
                        <div className="empty-action">
                            <button className="btn btn-primary">Send a message</button>
                        </div>
                    </div>
                </div>
                <div className="column col-12">
                    <div className="empty">
                        <div className="empty-icon"><i className="icon icon-3x icon-mail"></i></div>
                        <p className="empty-title h5">You've successfully signed up</p>
                        <p className="empty-subtitle">Click the button to invite your friends</p>
                        <div className="empty-action">
                            <button className="btn btn-primary">Invite your friends</button>
                        </div>
                        <div className="empty-action">
                            <button className="btn btn-link">Skip</button>
                        </div>
                    </div>
                </div>
                <div className="column col-12">
                    <div className="empty">
                        <div className="empty-icon"><i className="icon icon-3x icon-people"></i></div>
                        <p className="empty-title h5">You are not following anyone</p>
                        <p className="empty-subtitle">Start to meet new friends</p>
                        <div className="empty-action input-group input-inline">
                            <input className="form-input" type="text" placeholder=""/>
                                <button className="btn btn-primary input-group-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>


        </>
    );
}


}

export default Home