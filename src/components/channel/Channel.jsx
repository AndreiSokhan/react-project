import s from './Channel.module.css';
import ArticleHeader from './../article-header/ArticleHeader';

function Channel(props) {
   return (
      <article className={s.Channel}>
         <img className={s.logolImg} src={props.logo} alt="channel-icon" />
         <ArticleHeader title={props.title}/>
      </article>
   );
}

export default Channel;