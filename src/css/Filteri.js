import React from "react";
import axios from 'axios'

class App extends React.Component{
onSearchTerms = (v) => {
this.setState({ SearchTerms: v.target.value });
console.log('object for user :', this.state.SearchTerms)
};

onSubmitApi = async(v) => {
     v.preventDefault();
   const response = await axios.get(
    "https://covid-193.p.rapidapi.com/statistics",
    {
      headers: {
        "x-rapidapi-key":
          "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
        "x-raidapi-host": "covid-193.p.rapidapi.com",
      },
    }
  );
    this.setState({ covidList: response.data.response });
    console.log("respns:", response);
    console.log("check CovidList", this.state.covidList);
    const result = this.state.covidList.filter(name=> name.country.includes(this.state.SearchTerms.trim()))
    console.log(result)
    return result


};
render(){
    return(
        <div>
            <form onSubmit={this.onSubmitApi}>
            <input type='text' onChange={this.onSearchTerms}>

            </input>
            </form>
        </div>
    )
}
}
// array.map() // [{a:value,b:value}].map(value => value.res = value.a+value.b) ... [res: ]
// array.filter()
// array.forEach((value, index, array) => {})
// array.evry