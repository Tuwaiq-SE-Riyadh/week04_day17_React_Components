import React from "react";
import './App.css';

function Post({data}){
    
    let show = data.map((element, key) => {
        return(
          <div>
            <img src={element.image}></img>
            <h6>{element.text}</h6>
          </div>
        )
    })
    return (
        <>
        {show}
        </>
    )
}
export default Post;

