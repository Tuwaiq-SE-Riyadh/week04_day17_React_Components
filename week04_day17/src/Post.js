function Post(props) {
    return (
      <div id="post" >
      
        <img src={props.props.url} width="100%" height="80%" />
        <p id = "p0">{props.props.id}</p>
      </div>
    );
  }
  export default Post;