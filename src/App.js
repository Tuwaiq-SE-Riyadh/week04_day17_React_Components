import logo from './logo.svg';
import './App.css';
import Card from './card';

function App() {
  return (
    <div className="page">
      <img className="imgHead" src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/08/la-liga-2020-21.jpg" alt=""></img>
      <h1 className="headText">La Liga Top Teams</h1>
      <div className="posts">
        <Card  imgUrl="https://thumbs.dreamstime.com/b/real-madrid-logo-collection-vector-logos-most-famous-football-teams-world-format-available-ai-illustrator-120473653.jpg" teamName="Real Madrid"/>
        <Card imgUrl="https://thumbs.dreamstime.com/b/fc-barcelona-logo-collection-vector-logos-most-famous-football-teams-world-format-available-ai-illustrator-120474562.jpg" teamName="Barcelona"/>
        <Card imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png" teamName="Atletico Madrid"/>
      </div>
      <div className="footer">
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default App;
