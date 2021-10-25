import './App.css';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';
import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';

let posts = [
  {
    id:"1",
    url:a
  },
  {
    id:"2",
    url:b
  },
  {
    id:"3",
    url:c
  },

]

function App() {
  return (
<>
<Header />
<div id="d_post">
{
  posts.map(function(e){
   return <Post key={e.id} props={e} />
    })

}

</div>
<Footer />
</>
  );
}


export default App;
