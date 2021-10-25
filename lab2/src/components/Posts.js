function Posts() {

  const foods = [
    {name: 1, image: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg'},
    {name: 2, image: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'},
    {name: 3, image: 'https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg'},
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
