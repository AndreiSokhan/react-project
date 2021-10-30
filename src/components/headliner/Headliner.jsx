import s from './Headliner.modules.css';


import likeIkon from "./../../assets/img/like.svg";
import dislikeIcon from "./../../assets/img/dislike.svg";
import clockIcon from "./../../assets/img/clock.svg"


function Headliner(props) {
   return (
      <article className={s.headliner}>
         <img className={s.thumbnail} src={props.thumbnail} alt="thumbnail-icon" />
         <div className={s.info}>
            <h1 className={s.title}>{props.title}</h1>
            <div className={s.rating}>
               <div className={s.like}>
                  <img className={s.likeIcon} src={likeIkon} alt="like-icon" />
                  <span className={s.text}>{props.like}</span>
               </div>
               <div className={s.dislike}>
                  <img className={s.disLikeIcon} src={dislikeIcon} alt="dislike-icon" />
                  <span className={s.text}>{props.dislike}</span>
               </div>
            </div>
            <div className={s.news}>
               <span className={s.label}>{props.labeText}</span>
               <div className={s.time}>
                  <img className={s.timeIcon} src={clockIcon} alt="clock-icon" />
                  <span className={s.timeText}>{props.time}</span>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Headliner;