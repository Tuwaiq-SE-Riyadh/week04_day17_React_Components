import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './componants/Header';
import Post from './componants/Post';
import Footer from './componants/Footer';
import reportWebVitals from './reportWebVitals';
import post1 from'./componants/post1.jpg'
import post2 from'./componants/post2.jpg'
import post3 from'./componants/post3.jpg'

ReactDOM.render(
  <React.StrictMode>
   
      <Header/>
      <div className="posts">
        <div className="gridItem"><Post imgsrc={post1} title="post1"/></div>
        <div className="gridItem"><Post imgsrc={post2} title="post2"/></div>
        <div className="gridItem"><Post imgsrc={post3} title="post3"/></div>
      </div>
    <Footer/> 
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
