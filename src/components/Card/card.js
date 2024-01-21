import React from "react";
import './card.css'


const Card = (props) => {

   // Define the path to the clouds image
//    const cloudsImagePath = '/assets/snow.svg';

   // Define a variable for the background image based on the mainWeather prop
//    const backgroundImage =
//      props.mainWeather === 'Clear' ? `url(${cloudsImagePath})` : 'none';
 
 
    return(
        <div className="card" > 
        
            <div className="card-top" >
                <p>{props.location}</p>
                <p>{props.time}</p>
               
            </div>
        
            <div className="card-face">
                <img className="face" src={props.face}></img>
                {/* <img className="face" src={props.mainWeather}></img> */}
            </div>
    
            <div className="card-btm" >
                <p className="temp">{props.temp}</p>
            </div>
        
         </div>

    )
}




export default Card