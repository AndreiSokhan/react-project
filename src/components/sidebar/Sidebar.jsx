import s from './Sidebar.module.css';
import SidebarTop from './sidebarTop/SidebarTop';


//import Headliner from './../Headliner';
//import img1 from './../../../assets/img/headliler-img/image-1.jpg';


function Sidebar() {
return (
   <div className={s.Sidebar}>
      <SidebarTop/>
   </div>



   //   <Headliner like="10.8k" dislike="1.4k" labelText="BBC NEWS" time="2:00 pm" thumbnail={img1} title="Hate speech vs free speech" />
   )
}
export default Sidebar;