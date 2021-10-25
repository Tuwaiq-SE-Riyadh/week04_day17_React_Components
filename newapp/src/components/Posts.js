function Posts() {

    const foods = [
      {name: 1, image: 'https://www.google.com/earth/studio/assets/static/images/social.jpg'},
      {name: 2, image: 'https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2021/03/387_387_Halloween_Sun_2014_1000.jpg?width=1200&enable=upscale'},
      {name: 3, image: 'https://i.natgeofe.com/n/45b15e0c-3e1e-46e3-83bd-d37fa0a78e16/78620_2x3.jpg'},
    ];
    
    return (
      
      <div className='menu'>
      {foods.map((post) =>    
            <div className='card'>
            <img src = {post.image}/>
            <p>Post {post.name}</p> 
            </div> )}
      </div>
  
    );
  }
  
  
  export default Posts;