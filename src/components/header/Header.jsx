import s from './Header.module.css';
import HeaderNavigation from './headerNavigation/HeaderNavigation';
import img1 from './../../assets/img/header-img/image-1.svg';
import img2 from './../../assets/img/header-img/image-2.svg';
import img3 from './../../assets/img/header-img/image-3.svg';


function Header() {
return (
   <div className={s.Header}>
      <ul className={s.List}>
         <HeaderNavigation listIcon={img1} link="San Francisco, California"/>
         <HeaderNavigation listIcon={img2} link="Analysis"/>
         <HeaderNavigation listIcon={img3} link="Monthly"/>
      </ul>
      

      {/*<Search/>*/}

   
   </div>
   )
}
export default Header;