import s from './SearchBlock.module.css';
//import switchIcon from "./../../../assets/img/header-img/switch.svg";

function SearchBlock() {
   return (
      <div className={s.SearchBlock}>
      <form className={s.Form} action="">
         <input className={s.text} type="text" size="20" value placeholder="Search for anything…"/>
      </form>

      </div>


      //<li className={s.NavigationList}>
      //   <img className={s.listIcon} src={props.listIcon} alt="list-icon" />
      //   <a className={s.link} href="#">{props.link}</a>
      //   <img classname={s.switchIcon} src={switchIcon} alt="swich-item" />
      //</li>


   );
}

export default SearchBlock;