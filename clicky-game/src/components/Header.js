
import React, { Component } from "react";
import "../components/head.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Best Dogs Clicky Game</h1>
                <p>Click on an image to earn points, but click only once!!</p>
            </div>
        )
    }
}
export default Header;