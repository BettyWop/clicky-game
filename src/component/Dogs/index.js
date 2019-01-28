import React from 'react';
import "./dogs.css";

function Dogs(props) {
   return (
       <img src={props.image}
       className="ppl col-md-4"
       onClick={() => props.clickHandle(props.id)}>
       </img>
   ) 
};

export default Dogs;