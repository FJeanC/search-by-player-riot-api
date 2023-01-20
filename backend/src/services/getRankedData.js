import getFormattedData from './getFormattedData.js'

const getRankedData = async function (summonerId){
    const url = `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_API_KEY}`
    return await getFormattedData(url)
}

export default getRankedData