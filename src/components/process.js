import React from "react";
import "./process.css";
import process1 from "./images/process1.png";
import process2 from "./images/process2.png";
import process3 from "./images/process3.png";

export default function Process(){
    return(
        <div className="process">
            <div className="processunder">
                <div className="processfirst">
                    <div className="processtext">
                        <h1>Save time. Get <span style={{color: "#a0ff00"}}>higher return</span>.<br></br>Multiply wealth.</h1>
                    </div>
                </div>
                <div className="processsecond">
                    <div className="processbox box1">
                        <div>
                            <div className="processimage">
                                <img src={process1} draggable="false"></img>
                            </div>
                            <h1>Best investment managers</h1>
                            <p>At stocxinvest you can have all these at a click, it’s always good to have a 2nd opinion before investing.</p>
                        </div>
                    </div>
                    <div className="processbox box2">
                        <div>
                            <div className="processimage">
                                <img src={process2} draggable="false"></img>
                            </div>
                            <h1>Stocxinvest – Trading Software</h1>
                            <p>Take Your Stock Trading to the Next Level with StocxInvest: Advanced Tools and Data Analysis for Informed Investment Decisions" with the fastest, transparent and real time execution software available in the market.</p>
                        </div>
                    </div>
                    <div className="processbox box3">
                        <div>
                            <div className="processimage">
                                <img src={process3} draggable="false"></img>
                            </div>
                            <h1>Unlocking Insights</h1>
                            <p>Maximizing Investment Decisions: How to Effectively Use Technical Tools for Smart Stock Investing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}