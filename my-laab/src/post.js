import React from "react";
import "./post.css";

function Post ({pic,title}){
return(
<div className="post">
    <div className="fl">
<img src={pic}/>
<p>{title}</p>
</div>
</div>

)


}
export default Post;