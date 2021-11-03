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
      <img className={s.Photo} src={Photo} alt="Photo"/>
      </div>
   );
}

export default SearchBlock;