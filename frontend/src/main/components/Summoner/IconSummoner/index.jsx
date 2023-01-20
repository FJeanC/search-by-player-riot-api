import React from "react"
import './IconSummoner.css'


const IconSummoner = function({iconId, level}) {
    const iconURL = 'http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/'

    return (
        <div>
            <img className="summoner-icon" src={iconURL+`${iconId}.png`} alt="Icon" />
            <div className="level">
                <span className="summoner-level">{level}</span>
            </div>
        </div>
    )
}

export default IconSummoner