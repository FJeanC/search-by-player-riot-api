import React from "react";
import './Summoner.css'
import api from '../../services/backend'
import { useLocation } from 'react-router-dom';
import useSWR from 'swr'
import { useNavigate } from "react-router-dom";

import unranked from '../../assets/Unranked_icon.png'
import iron from '../../assets/Iron_icon.png'
import bronze from '../../assets/Bronze_icon.png'
import silver from '../../assets/Silver_icon.png'
import gold from '../../assets/Gold_icon.png'
import platinum from '../../assets/Platinum_icon.png'
import diamond from '../../assets/Diamond_icon.png'
import master from '../../assets/Master_icon.png'
import grandmaster from '../../assets/Grandmaster_icon.png'
import challanger from '../../assets/Challanger_icon.png'

import SummonerElo from "./SummonerElo";
import IconSummoner from "./IconSummoner";
import WinLose from "./WinLose";
import Loading from "../templates/Loading";

const fetcher = async function (endpoint) {
    const res = await api.get(endpoint)
    return res

}

const Summoner = function () {
    const location = useLocation()
    const navigate = useNavigate()

    const {data, error, isLoading } = useSWR(`/summoner/${location.state.id}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    if (isLoading) return (
        <Loading />
    )

    if (error) {
        navigate('/')
    }

    function ChooseIconByElo(elo) {
        switch (elo) {
            case "IRON":
                return <SummonerElo sourceImg={iron} />
            case "BRONZE":
                return <SummonerElo sourceImg={bronze} />
            case "SILVER":
                return <SummonerElo sourceImg={silver} />
            case "GOLD":
                return <SummonerElo sourceImg={gold} />
            case "PLATINUM":
                return <SummonerElo sourceImg={platinum} />
            case "DIAMOND":
                return <SummonerElo sourceImg={diamond} />
            case "MASTER":
                return <SummonerElo sourceImg={master} />
            case "GRANDMASTER":
                return <SummonerElo sourceImg={grandmaster} />
            case "CHALLENGER":
                return <SummonerElo sourceImg={challanger} />
            default:
                return <SummonerElo sourceImg={unranked} />
        }
    }
    console.log(data)
    function CalculateWinRate(wins, losses) {
        return Number.isNaN(((wins / (wins + losses)) * 100)) ? 0 : ((wins / (wins + losses)) * 100).toFixed(0)
    }
    const summonerData = data.data
    return (
        <div className="summoner-container">
            <div className="summoner-content">
                <div className="profile-info">
                    <IconSummoner iconId={summonerData.profileIconId} level={summonerData.summonerLevel} />
                    <div className="name">
                        <span className="summoner-name">{summonerData.summonerName}</span>
                        <span className="tier-rank">{summonerData.tier} - {summonerData.rank}</span>
                        <span className="tier-rank">{summonerData.leaguePoints} LP</span>
                    </div>
                    {ChooseIconByElo(summonerData.tier)}
                </div>
                <div className="games-info">
                    <WinLose wins={summonerData.wins} losses={summonerData.losses} />
                    <div className="circle-winrate">
                        {CalculateWinRate(summonerData.wins, summonerData.losses)}%
                    </div>
                </div>
            </div>
            <div className="return">
                <span onClick={() => navigate('/')}>Back</span>
            </div>
        </div>
    )
}
export default Summoner