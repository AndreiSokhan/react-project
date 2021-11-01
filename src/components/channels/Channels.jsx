import s from './Channels.module.css';
import Channel from './../channel/Channel';
import img1 from './../../assets/img/channel-img/image-1.png';
import img2 from './../../assets/img/channel-img/image-2.png';
import img3 from './../../assets/img/channel-img/image-3.png';
import img4 from './../../assets/img/channel-img/image-4.png';
import img5 from './../../assets/img/channel-img/image-5.png';
import img6 from './../../assets/img/channel-img/image-6.png';

function Channels() {
   return (
      <div className={s.Channels}>
         {/*<Headliner like="10.8k" dislike="1.4k" labelText="BBC NEWS" time="2:00 pm" thumbnail={img1} title="Hate speech vs free speech" />*/}
         <Channel logo={img1} title="FOX NEWS" />
         <Channel logo={img2} title="CW6 NEWS" />
         <Channel logo={img3} title="ABC NEWS" />
         <Channel logo={img4} title="AL JAZEERA" />
         <Channel logo={img5} title="BBC NEWS" />
         <Channel logo={img6} title="CNN NEWS" />
      </div>
   )
   }
   export default Channels;