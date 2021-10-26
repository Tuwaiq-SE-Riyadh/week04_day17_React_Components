import react from 'react';
import './App.css';
import post from './components/header';
import header from'./components/footer';
import footer from './post';

function App() {

  const posters=[
    {img:"https://cutt.ly/HROhVzO", title:"post1"},
    {img:"https://cutt.ly/xROjf59", title:"post2"},
    {img:"https://cutt.ly/xROjf59", title:"post2"}
  ]
    

  return (
    <div className="App">
    <header img="https://cutt.ly/CROLN7s" 
    title="welcome to my blog"/>
    {posters.map((item)=>
    <div className="poost" key={Math.random()}>
    <post  img={item.img} title={item.title}/>
    </div>
  
    
        
    )
}
    
    
      welcome to my blog
      <footer  />
      
      
         
    </div>
  );
}

export default App;
