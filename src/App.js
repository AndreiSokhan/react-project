
import Headliner from './components/headliner/Headliner';
import img1 from './assets/img/image-1.jpg';
import img2 from './assets/img/image-2.jpg';
import img3 from './assets/img/image-3.jpg';
import img4 from './assets/img/image-4.jpg';
import img5 from './assets/img/image-5.jpg';
import img6 from './assets/img/image-6.jpg';

function App() {
  return (
    <div className="App">
      <Headliner thumbnail={img1} title="Hate speech vs free speech" />
      <Headliner thumbnail={img2} title="Mother who left her baby" />
      <Headliner thumbnail={img3} title="Ontario Liberal leadership" />
      <Headliner thumbnail={img4} title="Mother of Stefanie Rengel" />
      <Headliner thumbnail={img5} title="Victim of Scarborough" />
      <Headliner thumbnail={img6} title="World   Cup: Popular items" />
    </div>
  );
}

export default App;
