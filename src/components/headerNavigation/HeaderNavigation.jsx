import s from './HeaderNavigation.module.css';
import switchIcon from "./../../assets/img/header-img/switch.svg";

function HeaderNavigation(props) {
   return (
      <li className={s.NavigationList}>
         <img className={s.listIcon} src={props.listIcon} alt="list-icon" />
         <a className={s.link} href="#">{props.link}</a>
         <img classname={s.switchIcon} src={switchIcon} alt="swich-item" />
      </li>
   );
}

export default HeaderNavigation;