import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { getRankedData, getSummonerData } from './services/index.js'

const app = express()
dotenv.config()
app.use(cors())
app.listen(3333)

app.get('/summoner/:summonerName', async (req, res) => {
    const { summonerName } = req.params;

    const { data: summonerData, status: summonerStatus } = await getSummonerData(summonerName)

    if(summonerStatus !== 200) {
        console.log('error 404')
        throw new Error({status: 500})
    }

    const { data: rankedData } = await getRankedData(summonerData?.id)

    const { id, name, summonerLevel, profileIconId } = summonerData
    const rankedSoloData = rankedData.find((data) =>  data.queueType === 'RANKED_SOLO_5x5') ?? {}
    const { tier = 'Unranked', rank = 0, wins = 0, losses = 0, leaguePoints = 0} = rankedSoloData
    
    res.json({
        summonerLevel,
        summonerName,
        id,
        name,
        profileIconId,
        tier,
        rank,
        wins,
        losses,
        leaguePoints
    })

})