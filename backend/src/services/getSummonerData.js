import getFormattedData from './getFormattedData.js'

const getSummonerData = async function (summonerName) {
    const url =  `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}?api_key=${process.env.RIOT_API_KEY}`
    return await getFormattedData(url)
}

export default getSummonerData

