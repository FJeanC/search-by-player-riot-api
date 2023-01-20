import React from "react"
import './SummonerElo.css'



const SummonerElo = function ({sourceImg}) {
    return (
        <div>
            <img className="elo-emblem" src={sourceImg} alt={sourceImg} />
        </div>
    )
}


export default SummonerElo