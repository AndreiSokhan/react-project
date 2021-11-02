import s from './News.module.css';
import NewsItem from './newsItem/NewsItem';
import img1 from './../../assets/img/news-img/image-1.jpg';
import img2 from './../../assets/img/news-img/image-2.png';
import img3 from './../../assets/img/news-img/image-3.png';

function News() {
return (
   <div className={s.News}>
      <NewsItem labelText="FOX NEWS" time="2:00 pm" thumbnail={img1} title="Travellers to pay more than $2K, Trudeau says" />
      <NewsItem labelText="CNN NEWS" time="2:00 pm" thumbnail={img2} title="Myanmar’s military seizes control of country ov  er..." />
      <NewsItem labelText="CNN NEWS" time="2:00 pm" thumbnail={img3} title="Pressure builds for Biden to cancel other pipeline..." />
   </div>
   )
}
export default News;