import React from "react";
import "./Header.css"
function Header(props){


    return( 

       
    
        <div className="header"  >
            <div classNam="h-img">
            <img src={props.pic} ></img>
            </div>
        
             <div className="title">
             <p>{props.title}</p> 
             </div>
             
            
        </div>

)
}

export default Header;