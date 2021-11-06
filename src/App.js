import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Headliners from './components/headliner/headliners/Headliners';
import Channels from './components/channel/channels/Channels';
import News from './components/news/News';
import MainTitle from './components/mainTitle/MainTitle';


function App() {
  return (
    <div className="App">

          {/*Header*/}
      {/*<header className="header">*/}
        <Header/>
      {/*</header>*/}

          {/*Aside*/}
      <aside className="sidebar">

        <Sidebar/>
        
      </aside>


          {/*Main*/}
      <main className='main'>

          {/*Channels*/}
        <MainTitle title="Explore Channels"/>
          <section classname="block-channels">
          <Channels/>
        </section>

        {/*Headliners*/}
      <MainTitle title="Today’s Headlines"/>
        <section className="block-headliners">
        <Headliners/>
      </section>

          {/*News*/}
      <MainTitle title="Featured News"/>
        <section classname="block-news">
          <News/>
        </section>
      </main>
    </div>
  );
}

export default App;
