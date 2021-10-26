import './Post.css';

let x = [
    {  
        PostImage: "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_1280.jpg",
        postName: "Post 1",
    },
    {  
        PostImage: "https://cdn.pixabay.com/photo/2017/11/07/18/40/brushes-2927793_1280.jpg",
        postName: "Post 2",
    },
    {  
        PostImage: "https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_1280.jpg",
        postName: "Post 3",
    }
]

function Post() {

        
    return (
        <>
        {
        x.map((elem)=> 

        <div className="gridItem">
        <img src={elem.PostImage} alt="test"/>
        <p>{elem.postName}</p>
        </div>
        )
    }
        
        
        </>
    );
    }

export default Post;



