import React from "react";
import './index.scss';


const item = (props) =>{

    return(
        <div class='content-box'>
            <p class='title-content'>{props.title}</p>
            <p>{props.text}</p>
            <p>{props.rating}</p>
        </div>
    )
}

export  default item;
