import React from "react";
import Card from './app';
import Data from "./Data";


function Header(){

  console.log(Data);
  return(
    <div>
       <h1 className='con'>Contact Person</h1> 
      <Card
        name= {Data[0].name}
        img = {Data[0].img}
        ph= {Data[0].ph}
        email= {Data[0].email}
      />,
      <Card
        name= {Data[1].name}
        img = {Data[1].img}
        ph= {Data[1].ph}
        email= {Data[1].email}
      />,
      <Card
        name= {Data[2].name}
        img = {Data[2].img}
        ph= {Data[2].ph}
        email= {Data[2].email}
      />
    </div>
  )
}

  export default Header;