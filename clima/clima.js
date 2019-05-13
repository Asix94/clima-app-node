const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=207986787d36f2b880a127bdd5238e34&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}