import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';


function App(props) {
  const print=images.map((item, key) => {
  return (
    <div className="App">
       <Header />
       <Post />
       <img src={item.image}/>
       <p>{item.text}</p>
       <Footer />
       
    </div>
  );
})
}
export default App;
