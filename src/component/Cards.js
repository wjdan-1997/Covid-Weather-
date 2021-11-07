import React from "react";

function Card(props){
        return (
            <div className='cards'>
            <h1>check out these  </h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            {props.children}
            </ul>
            <ul className='cards__items'>
            {props.children}
            </ul>
            </div>
            </div>
            </div>
        )
}
export default Card
