import React from "react";
import axios from 'axios'
import SearchBar from '../src/component/SearchBar'


class App extends React.Component{

    constructor(props){
        super(props);
        this.state ={ city:''}
       
    }
     //  state ={lat:'', lng:'', city:''}
    //KEY = '7ae347ac8b7d4ae6acc1ace0aba53da3'
    onSubmitAPIworks =  async (cityValue) => {
        const res =   await axios.get('http://api.openweathermap.org/data/2.5/weather?',{
            params:{
                q: cityValue,
                appid:'d962862dddca2d0427bb9f01a032cd06'
            }
        })
        console.log('check for the res of location api' ,res)  
    }
       
    render(){
        return (
            <div>
                 <SearchBar onSubmit={this.onSubmitAPIworks} />
            </div>
        )
    }
} 
export default App