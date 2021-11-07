
import axios from 'axios'
const key ="d962862dddca2d0427bb9f01a032cd06"

//covid api
export default axios.create({
    baseURL:'http://api.openweathermap.org/data/2.5',
    params: {    
        appid: key,
      },

})