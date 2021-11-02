import './App.css';
import Header from './components/header/Header';
import Headliners from './components/headliners/Headliners';
import Channels from './components/channels/Channels';
import News from './components/news/News';


function App() {
  return (
    <div className="App">
      <header className="header">
        <Header/>
      </header>
      <aside className="sidebar">aside</aside>
      <main className='main'>
        <section classname="block-channels">
        <h2 className="block-title">Explore Channels</h2>
          <Channels/>
        </section>
        <section className="block-headliners">
          <h2 className="block-title">Today’s Headlines</h2>
          <Headliners/>
        </section>
        <section classname="block-news">
        <h2 className="block-title">Featured News</h2>
          <News/>
        </section>
      </main>
    </div>
  );
}

export default App;
