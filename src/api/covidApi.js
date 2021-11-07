
import axios from 'axios'
const key = "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa"

//covid api
export default 


axios.create({
      baseURL: 'https://covid-193.p.rapidapi.com',
        headers: {
          "x-rapidapi-key":key ,
          "x-raidapi-host": "covid-193.p.rapidapi.com",
        },

    

  })



 