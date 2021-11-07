import React from 'react'


function CardItem({label,text,src}){
    return(
        <>
        < li className='cards__item'>
            <div className='cards__item__link'>
                <figure 
                className='cards__item__pic-wrap' 
                data-category={label}>
                <img src={src}
                alt='Travel Image'
                className='cards__item__img'
                />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__itsm__text'> {text}</h5>
                </div>
            </div>
        </li>
        
       
        </>
        ) 
}
export default CardItem;