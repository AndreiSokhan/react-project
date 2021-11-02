import s from './SearchBlock.module.css';
import BurgerImg from './../../../assets/img/header-img/Search/burger.svg';
import Photo from './../../../assets/img/header-img/Search/photo.jpg';

function SearchBlock() {
   return (
      <div className={s.SearchBlock}>
      <form className={s.Form} action="">
         <input className={s.text} type="text" size="20" placeholder="Search for anything…"/>
      </form>
      <button className={s.BurgerBtn}><img className={s.BurgerImg} src={BurgerImg} alt="BurgerImg" /></button>
      <img className={s.Photo} src={Photo} alt="Photo" />
      </div>


      //<li className={s.NavigationList}>
      //   <img className={s.listIcon} src={props.listIcon} alt="list-icon" />
      //   <a className={s.link} href="#">{props.link}</a>
      //   <img classname={s.switchIcon} src={switchIcon} alt="swich-item" />
      //</li>


   );
}

export default SearchBlock;