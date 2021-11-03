import s from './SidebarMenu.module.css';

function SidebarMenu(props) {
   return (
      <li className={s.SidebarMenu}>
         <img className={s.menuIcon} src={props.menuIcon} alt="menu-icon" />
         <span className={s.menuItem}>{props.menuItem}</span>
      </li>
   );
}

export default SidebarMenu;