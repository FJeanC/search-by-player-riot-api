import axios from 'axios'

function formatResponse(response) {
    if(!response) {
        return {
            status: { message: 'No response was given from server', status_code: 500}
        }
    }
    
    return {
        data: response.data,
        status: response.status 
    }

}

const getFormattedData = async function (url) {
    const response = await axios.get(url)
    .then((response) => {
        return formatResponse(response)
    })
    .catch((e) => {
        if (e.response) {
            console.error(e.response.status, e.response.data)
            return formatResponse(e.response)
        }
        if (e.request) {
            console.error(e.request)
            return formatResponse()
        }
    })
    return response
}

export default getFormattedData

