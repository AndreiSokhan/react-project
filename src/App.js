import './App.css';
import Headliners from './components/headliners/Headliners';
import Channels from './components/channels/Channels';


function App() {
  return (
    <div className="App">
      <header className="header">Header</header>
      <aside className="sidebar">aside</aside>
      <main className='main'>
        <section classname="block-channels">
        <h2 className="block-title">Explore Channels</h2>
          <Channels />
        </section>
        <section className="block-headliners">
          <h2 className="block-title">Today’s Headlines</h2>
          <Headliners/>
        </section>
      </main>
    </div>
  );
}

export default App;
