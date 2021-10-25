import './App.css';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';

let posts = [
  {
    id:"1",
    url:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    id:"2",
    url:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    id:"3",
    url:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
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
