import react from "react";
import './compo.css';

function Post({image, name}){
    return(
        <div id="post">
            <img src={image}></img>
            <h5>{name}</h5>

        </div>
    );
}
export default Post;