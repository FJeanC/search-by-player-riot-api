import React from "react"
import './WinLose.css'

const WinLose = function({wins, losses}) {
    return (
        <div className="win-losses">
            <span className="win">
                <strong>WINS: </strong>
                <label>{wins}</label>
            </span>
            <span className="lose">
                <strong>LOSSES: </strong>
                <label>{losses}</label>
            </span>
        </div>
    )
}


export default WinLose