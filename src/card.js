

function Card(props){
    return(
        <div className="divCard">
        <img src={props.imgUrl} alt="img" className="carImg"></img>
        <p className="textCard">{props.teamName}</p>
        </div>
    );
}

export default Card