import s from './SidebarTop.module.css';
import logoImg from './../../../assets/img/aside-img/image-logo.svg';
import img1 from "./../../../assets/img/aside-img/image-1.svg";
import img2 from "./../../../assets/img/aside-img/image-2.svg";
import img3 from "./../../../assets/img/aside-img/image-3.svg";
import img4 from "./../../../assets/img/aside-img/image-4.svg";
import img5 from "./../../../assets/img/aside-img/image-5.svg";
import img6 from "./../../../assets/img/aside-img/image-6.svg";
import img7 from "./../../../assets/img/aside-img/image-7.svg";

function SidebarTop() {
   return (
      <div className={s.SidebarTop}>
         <a className={s.logo} href="#">{logoImg}</a>
         <menu className={s.menu}>
            <SidebarMenu menuIcon={img1} menuItem="Home"/>
            <SidebarMenu menuIcon={img2} menuItem="Explore"/>
            <SidebarMenu menuIcon={img3} menuItem="Saved"/>
            <SidebarMenu menuIcon={img4} menuItem="Subscriptions"/>
            <SidebarMenu menuIcon={img5} menuItem="Messages"/>
            <SidebarMenu menuIcon={img6} menuItem="Settings"/>
            <SidebarMenu menuIcon={img7} menuItem="Logout"/>
         </menu>
      </div>
   );
}

export default SidebarTop;