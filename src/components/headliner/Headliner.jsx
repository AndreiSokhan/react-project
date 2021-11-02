import s from './Headliner.module.css';
import likeIkon from "./../../assets/img/headliler-img/like.svg";
import dislikeIcon from "./../../assets/img/headliler-img/dislike.svg";
import ArticleHeader from './../article-header/ArticleHeader';
import Label from './../label/Label';
import Time from './../time/Time';

function Headliner(props) {
   return (
      <article className={s.headliner}>
         <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail-icon" />
         <div className={s.info}>
            <ArticleHeader title={props.title}/>
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
               <Label labelText={props.labelText}/>
               <Time time={props.time}/>
            </div>
         </div>
      </article>
   );
}

export default Headliner;