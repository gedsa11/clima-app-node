const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1d68a4d27b864c8c52adfa436fc02b2e&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}