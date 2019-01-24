import React from "react";

function Scoreboard(props) {
    return (
        <nav className="nav">
            <a class="nav-link active" href="#"><strong>Clicky Game</strong></a>
            <a class="nav-link" href="#">Click an image to begin!</a>
            <a class="nav-item">{props.result}</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Score: {props.score} | Top Score: {props.topScore}</a>
        </nav>
    )
}

export default Scoreboard;