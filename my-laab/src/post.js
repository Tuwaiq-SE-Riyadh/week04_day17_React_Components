function post(props){
const {img,title}=item;
return(
    <div className="postt">
       
            
            <img src={item.img}/>
            <p>{item.title}</p>
            </div>

        )

}




export default post;