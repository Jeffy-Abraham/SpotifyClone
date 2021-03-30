import React from "react";
import "./spotify-button.style.css";
const CustomButton = ({type,text,handleSubmits,id}) => {
    
  return (
      
    <div className="spotify-button-container">
        
      <button  id={id} onClick={(e)=>handleSubmits(e)} className={'spotify-button'+(type?'-invert':'')}>{text}</button>
    </div>
  );
};

export default CustomButton;
