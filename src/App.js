import './App.css';
import Header from './components/header/Header';
import Headliners from './components/headliner/headliners/Headliners';
import Channels from './components/channel/channels/Channels';
import News from './components/news/News';
import SearchBlock from './components/header/searchBlock/SearchBlock';


function App() {
  return (
    <div className="App">
      <header className="header">
        <Header/>
        <SearchBlock/>

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
