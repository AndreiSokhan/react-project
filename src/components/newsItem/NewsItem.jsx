import s from './NewsItem.module.css';
import ArticleHeader from '../article-header/ArticleHeader';
import Label from '../label/Label';
import Time from '../time/Time';


function NewsItem(props) {
   return (
      <article className={s.NewsItem}>
         <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail-icon" />
         <div className={s.info}>
            <ArticleHeader title={props.title}/>
            <div className={s.news}>
               <Label labelText={props.labelText}/>
               <Time time={props.time}/>
            </div>
         </div>
      </article>
   );
}

export default NewsItem;