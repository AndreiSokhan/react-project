import s from './Sidebar.module.css';
import SidebarMenu from './sidebarMenu/SidebarMenu';
import logoImg from './../../assets/img/aside-img/image-logo.svg';
import img1 from "./../../assets/img/aside-img/image-1.svg";
import img2 from "./../../assets/img/aside-img/image-2.svg";
import img3 from "./../../assets/img/aside-img/image-3.svg";
import img4 from "./../../assets/img/aside-img/image-4.svg";
import img5 from "./../../assets/img/aside-img/image-5.svg";
import img6 from "./../../assets/img/aside-img/image-6.svg";
import img7 from "./../../assets/img/aside-img/image-7.svg";
import fireImg from "./../../assets/img/aside-img/fire.svg";
import crossImg from "./../../assets/img/aside-img/cross.svg";



function Sidebar() {
return (
   <div className={s.Sidebar}>
      <div className={s.SidebarTop}>
         <a className={s.logo} href="#">
            <img clasName={s.logoImg} src={logoImg} alt="logo-Img" />
         </a>
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
      <div className={s.SidebarBottom}>
         <div className={s.inner}>
            <img className={s.crossImg} src={crossImg} alt="cross-img" />
               <div className={s.wrapper}>
                  <div className={s.fireBackground}>
                     <img className={s.fireImg} src={fireImg} alt="fire-img" />
                  </div>
                  <p className={s.text}>Subscribe to our new plan<span className={s.price}>$25</span></p>
                  <p className={s.offer}>It is a limited time offer that will expire soon.</p>
                  <a className={s.btn} href="#">Subscribe now</a>
               </div>
         </div>
      </div>
   </div>

   )
}
export default Sidebar;