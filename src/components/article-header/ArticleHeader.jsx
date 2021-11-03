import s from './ArticleHeader.module.css';

function ArticleHeader(props) {
   return (
      <h2 className={s.title}>{props.title}</h2>
   );
}

export default ArticleHeader;