
function Post({imgLink ,Imgtext}) {
    return (
        <div className = "Post">
            <img src = {imgLink} className="img"></img>
            <p>{Imgtext}</p>
        </div>
    );
}

export default Post;