import React from "react";
import axios from "axios";
import CovidList from "./CovidList";
import SearchBar from "./SearchBar";
import faker, { image } from "faker";
import CardItem from "./CardsItems";
import Card from "./Cards";

import covidApi from "../api/covidApi";
import weatherApi from "../api/weatherApi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      covidList: [], // here the respons list
      Selected: "", // here user select value
      weather: "", // weather resp
    };
    this.Fun();
  }

  Fun = async () => {
    const response = await covidApi.get('/statistics');
    this.setState({ covidList: response.data.response });
   console.log("respns:", response);
   console.log("check CovidList", this.state.covidList);
  };

  onSubmitAPIworks = async (cityValue) => {
    const res = await weatherApi.get( "/weather?",
      {
        params: {
          q: cityValue,
        },
      }
    );
    console.log("check for the res of location api", res);
    this.setState({ weather: res });
  };

  onSubmitApi = (v) => {
    v.preventDefault();
    const value = this.state.covidList[v.target.selectedIndex];
    console.log("selected ===> ", value);
    this.setState({ Selected: value });
  };

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="fields">
            <select onChange={this.onSubmitApi}>
              {this.state.covidList.map((cl, idx) => {
                return (
                  <option key={idx} value={idx}>
                    {cl.country}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
        <CovidList itemSelected={this.state.Selected} />
        {/* CALL BACK FUNCTION  */}
        <SearchBar onSubmitValue={this.onSubmitAPIworks} />
        <div className="ui list">
          <div className="itme">{this.state.weather?.data?.sys.country}</div>
          <div className="itme">
            {this.state.weather?.data?.weather[0].description}
          </div>
        </div>

        <Card>
          <CardItem
            src={faker.image.cats()}
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="cats"
          />

          <CardItem
            src={faker.image.city()}
            text=" Travel through the Islands of Bali in a Private Cruise"
            label="Adventrue"
          />
          <CardItem
            src={faker.image.animals()}
            text=" Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            label="Adventrue"
          />
        </Card>
      </div>
    );
  }
}
export default App;


