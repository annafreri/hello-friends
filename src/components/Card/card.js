import React from "react";
import './card.css'


const Card = (props) => {
    console.log("Card is rendered");
    return(
        <div className="card">
            <div className="card-top" >
                <p>{props.location}</p>
                <p>{props.time}</p>
            </div>
        
            <div className="card-face">
                <img className="face"  src={props.face}></img>
            </div>
    
            <div className="card-btm" >
                <p className="temp">{props.temp}</p>
            </div>
        
         </div>

    )
}


// const Card = () => {
//     console.log("Card is rendered");
//     return(
//         <div className="card">
//             <div className="card-top" >
//                 <p>Athens, GR</p>
//                 <p>18:00</p>
//             </div>
        
//             <div className="card-face">
//                 <img className="face"  src={clo}></img>
//             </div>
    
//             <div className="card-btm" >
//                 <p className="temp">9°C</p>
//             </div>
        
//          </div>

//     )
// }

export default Card