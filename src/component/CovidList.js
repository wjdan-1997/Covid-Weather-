import React from "react";
import '../css/style.css' 
const CovidList=({itemSelected})=>{

    
    return(

       <div className='overview' id='faq-container' >
       <div className="title2"> <h1>Cases overview </h1></div>
       <div><p id="country">{itemSelected?.country}</p></div>
 
            <div className="fields">
            <dl className="user-data-list">
            <div className="user-data-item">
                <dt className="data-term">Total cases </dt>
                <dd className="data-value h" id="cases_total">.{itemSelected?.cases?.total}</dd>
                <p className="data-value p" id="cases_new">.{itemSelected?.cases?.new}</p>
            </div>
            <div className="user-data-item">
                <dt className="data-term">Recovered</dt>
                <dd className="data-value h" id="recovered" >.{itemSelected?.cases?.recovered}</dd> 
                <p className="data-value p" id="none" >.</p> 
            </div>
            <div className="user-data-item">
                <dt className="data-term">Deaths</dt>
                <dd className="data-value h" id="deaths_total" >.{itemSelected?.deaths?.total}</dd> 
                <p className="data-value p" id="deaths_new" >.{itemSelected?.deaths?.new}</p> 
            </div>
            <div className="user-data-item">
                <dt className="data-term I">Tests</dt>
                <dd className="data-value h" id="tests_total" >.{itemSelected?.tests?.total}</dd> 
                <p className="data-value p" id="none" >.</p> 
            </div>
            </dl>
            </div>
            
             </div>
           
         
         
        )
   
}
export default CovidList