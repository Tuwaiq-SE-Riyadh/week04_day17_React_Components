
import './componants/compo.css';
import Header from './componants/Header';
import Post from './componants/Post';
import Footer from './componants/Footer';
import { directive } from '@babel/types';


function App() {
  
  return(  
   <div><Header/>
   <div id="posts">
   <Post image="https://tse1.mm.bing.net/th?id=OIP.oeKWr1r410FQzVkenkLquAHaEo&pid=Api&P=0&w=289&h=181" name="post1"/>
   <Post image="https://tse1.mm.bing.net/th?id=OIP.oeKWr1r410FQzVkenkLquAHaEo&pid=Api&P=0&w=289&h=181" name="post2"/>
   <Post image="https://tse1.mm.bing.net/th?id=OIP.oeKWr1r410FQzVkenkLquAHaEo&pid=Api&P=0&w=289&h=181" name="post3"/>
   </div>
   <Footer/>
   </div>
    
  
  );
 
}

export default App;

