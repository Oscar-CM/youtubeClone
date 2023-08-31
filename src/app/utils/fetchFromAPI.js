import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {

    params: {
        maxResults:'50'
    },
    headers: {
        'X-RapidAPI-Key': 'd11e0b10admsh5be3aa4109d8519p1e1e01jsn9e190d05d064',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options)

    return data;
}