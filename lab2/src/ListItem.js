import './List.css';

function ListItem(props) {


  return (
    
   <>
   
   <div className="card">
   <img src={props.image} ></img>

   <p><button>{props.post}</button></p>
  </div>
  
 
   </>
  );
}

export default ListItem;

