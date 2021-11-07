import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super();
        this.state ={city: ''};
    }
    onChangeText = (e) => {
       this.setState({city: e.target.value})
        // console.log('City:',this.state.city)
        // console.log('Event type:',e)
    }
    onSubmitCity =(e)=>{
        e.preventDefault()
        // props = onSubmit{onSubmitAPIworks(this.stat.city)}
        this.props.onSubmitValue(this.state.city)
    }
    render(){
        return(
         <div className='ui segment'> 
         <form onSubmit={this.onSubmitCity}
         className='ui form'>
         <div className='fields'>
             <label> Search For City </label>
             <input type='text' 
             onChange={this.onChangeText}
             value={this.state.city}/>
             
         </div>
         </form>
         </div>
        )
    }
 }

export default SearchBar