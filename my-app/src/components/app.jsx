import React from "react";


function Card(props){
    return (
      <div className="crd">
        <h2 className='name'>{props.name}</h2>
        <img src={props.img } alt='img' />
       <div  className= 'txt'>
       <p>{props.ph}</p>
        <p>{props.email}</p>
       </div>
      </div>
    )
  };

  
export default Card;
