import React from "react";
import './index.scss';


const item = (props) =>{

    return(
        <div class='content-box'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p>{props.rating}</p>
        </div>
    )
}

export  default item;
