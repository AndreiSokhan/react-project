import s from './Headliners.module.css';
import Headliner from './../Headliner';
import img1 from './../../../assets/img/headliler-img/image-1.jpg';
import img2 from './../../../assets/img/headliler-img/image-2.jpg';
import img3 from './../../../assets/img/headliler-img/image-3.jpg';
import img4 from './../../../assets/img/headliler-img/image-4.jpg';
import img5 from './../../../assets/img/headliler-img/image-5.jpg';
import img6 from './../../../assets/img/headliler-img/image-6.jpg';

function Headliners() {
return (
   <div className={s.Headliners}>
      <Headliner like="10.8k" dislike="1.4k" labelText="BBC NEWS" time="2:00 pm" thumbnail={img1} title="Hate speech vs free speech" />
      <Headliner like="10.8k" dislike="3.4k" labelText="BBC NEWS" time="7:00 pm" thumbnail={img2} title="Ontario Liberal leadership" />
      <Headliner like="20.8k" dislike="1.1k" labelText="BBC NEWS" time="4:00 pm" thumbnail={img3} title="Victim of Scarborough" />
      <Headliner like="0" dislike="20k" labelText="ABC NEWS" time="2:00 pm" thumbnail={img4} title="Mother who left her baby" />
      <Headliner like="10.8k" dislike="1.4k" labelText="CW6 NEWS" time="3:00 pm" thumbnail={img5} title="Mother of Stefanie Rengel" />
      <Headliner like="10.8k" dislike="1.4k" labelText="CNN NEWS" time="5:00 pm" thumbnail={img6} title="World Cup: Popular items" />
   </div>
   )
}
export default Headliners;