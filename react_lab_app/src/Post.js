import './App.css';

function post (props){
    return (
    <div className="divPost">
    <img src={props.image}/>
        <p>{props.postName}</p>
        </div>
        )
}

export default post;
