import logo from './logo.svg';
import './App.css';
import Post from "./Post"
function App() {

  return (
    <div className="App">
      <p className="pHeader">Welcome to My Blog</p>
       <header className="App-header">
      
      
      <Post image="https://art.art/wp-content/uploads/2021/06/medina_art_500.jpg" postName="Post1"/>
      <Post image="https://i.pinimg.com/550x/27/f0/27/27f027c0307c6e0b2fb3785fff3dc619.jpg" postName="Post2"/>
      <Post image="https://images.theconversation.com/files/296052/original/file-20191008-128681-ngzwqb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" postName="Post3"/>
      

      </header>
      <p className="p1">Contat Us</p>
    </div>
  );
}

export default App;
