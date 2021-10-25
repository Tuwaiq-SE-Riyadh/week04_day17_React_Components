import post1 from'./post1.jpg'
import post2 from'./post2.jpg'
import post3 from'./post3.jpg'
function Post(posts){
    return(
<div className='posts'> 
    <div className="gridItem">
    <img src={posts.imgsrc} alt="" className='postImg'/>
    <p className='postDetail'>{posts.title}</p>
    </div>
    
</div>


    )
}
export default Post;