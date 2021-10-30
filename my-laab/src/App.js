 import React from 'react';

import './App.css';

import Header from'./components/Header';
import Post from './Post';
import Footer from './Footer';


function App () {
  
    

  return (
    <div className="App">
      
      
      
      <Header  pic={"https://cutt.ly/CROLN7s"}  title={"welcome to my blog"} />
       <div className="posts">
        <Post  pic={"https://cutt.ly/HROhVzO"} title={"post1"}/>
        <Post  pic={"https://cutt.ly/dRX7vsm"} title={"post2"}/>
        <Post  pic={"https://cutt.ly/xROjf59"} title={"post3"}/>
       </div>
      

     <Footer  />
    
    </div>
  
   
      
         
    
  );
}

export default App;
