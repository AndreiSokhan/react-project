import s from './MainTitle.module.css';

function MainTitle(props) {
   return (
      <div className={s.MainTitle}>
      <h2 className={s.title}>{props.title}</h2>
      <a className={s.link} href="#">See all</a>
      </div>
   );
}

export default MainTitle;