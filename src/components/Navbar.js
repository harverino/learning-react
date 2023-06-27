import React from "react";
import ReactDOM from 'react-dom';
import reactLogo from "../img/reactLogo.png"

export default function() {
    return (
        <nav>
            <img src={reactLogo} className="nav--img"></img>
            <h3 className="nav--logo">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}
