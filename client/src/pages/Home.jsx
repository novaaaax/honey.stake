import React, { Component } from "react"
// import "../components/assets/style.css"
// import "./components/assets/scss/home.scss";
// import centralized from "../components/assets/img/centralized.png"
import cent from "../components/assets/img/cent.png"
import decent from "../components/assets/img/decent.png"


class Home extends Component {
    render() {
        return (
            <>
                <div style={{

                    // paddingTop:"120px",
                    // backgroundColor: "#74e2ff",
                    // color: "#black",
                    // borderRadius: "25px",
                    // textAlign: "center"

                }} id="welcome" className="hero column col-11 col-xs-12 container">
                    <h1>Welcome to Solve, </h1>
                    <h3>we are committed to take you on the Journey of decentralization and Solve it together.</h3>

                </div>

                <div id="centralize" className="hero column col-11 col-xs-12 container">
                    <div class="row">
                        <div class="column1">
                            <div >
                                <img src={cent} align="right"></img>
                            </div>
                            <h5>First lets take a look at what centralized systems look like vs. decentralized systems</h5>
                            <br />
                            <h6>In our example, you can see that a centralized system is a kind of system that requires you give your power, data or money to either a big corporation, a bank or the government for convenience.</h6>
                            <h6> These centralized systems are for profit businesses and they know they are convenient and very easy to use.</h6>
                            <h6>For example, although most Americans are banked, there are 1.7 Billion adults un-banked in the World because some of them are to poor or live in poor countries and a bank doesn't take them serious, because the bank can't make money off of them.</h6>
                            <h6> If you are banked you know that the bank will hold your money, but they will lend that money (credit) to another person or other banks for a high interest, this bank then makes 80% an gives you 20% in interest for holding Your Money in the (System) bank .</h6>
                            <h6>Another example are the big corporations like BookFace, Amazonian or tubYou.</h6>
                            <h6>These centralized businesses are making their profit with your help, your attention, your information, your data. We know as a fact that some of them sell your data to countries like China or Russia or to advertising Companies,
                         none of them will send you a check at the end of the month for your participation, instead they will bombard you with advertising and they will track your location.</h6>
                            <h6>These centralized platforms can be good for building a small business, but if you say anything against the government or your message contains information that their algorithms don't like, you will be demonetized or banned.
                         We all might have heard stories about banned videos on tubeYou or that BookFace deleted someones account. Don't worry it wasn't you...yet</h6>
                            <h6>These Centralized systems are in some instances violating our fundamental human rights and because they became big and powerful systems it can turn to tyranny very quick and very fast...when it's your turn to speak up and you cant, what will you do without a platform to give you a voice in this digital age?</h6>
                            <h6>This brings us back to the Governments.
                            As of today, there are 50 dictatorships in the world
                            (19 in Sub-Saharan Africa, 12 in the Middle East and North Africa, 8 in Asia-Pacific, 7 in Eurasia, 3 in Americas and 1 in Europe).
                              We define a dictator as the ruler of a land rated “Not Free” by the Freedom House in their annual survey of freedom.</h6>
                            <h6>In this Digital age it can be very easy for a Government to become a Dictatorship and way to hard to get out of one.</h6>
                            <h6> Take China for example, second economy in the World. They have internet but they can spread any information without the government not knowing.
                            China is so advanced in their digitalization that 90% of their transactions are digital but instead of using cryptocurrencies, the government is forcing it's people to pay with a digital yan so the transaction can be traced.
                             How long will it take fot your favorite government to have total control over your finance, your information and your freedom </h6>
                        </div>

                    </div>
                </div>
                <div id="centralize" className="hero column col-11 col-xs-12 container">
                    <div class="row">

                        <div id="decent">
                            <img src={decent} align="right"></img>
                        </div>
                        <h1>Have you ever ask yourself what ar</h1>
                        <h2>A decentralized system is a kind of system that requires the users to make their own, individual, decisions.
                        In such systems, there is no designated central authority making decisions in the name of all participants.
                        Instead, each participant, also known as ‘peer,’ makes their own autonomous decisions pursuing their own self-interest that may collide with the goals of other peers.
                        The participants directly interact with each other, share information, or, offer services to others.
                        In an open, decentralized system, there are no limits or regulations for new users to access it.
                        Likewise, any new participant can enter or leave the system at will.</h2>

                        <h3>We sincerely believe that one of the projects that offer the potential to operationalize the proven concept of decentralization is Cardano.</h3>

                    </div>

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
                                <input className="form-input" type="text" placeholder="" />
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