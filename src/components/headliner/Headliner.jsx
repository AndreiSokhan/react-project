import './Headliner.css';
import thumbnail from "./../../assets/img/image-1.jpg";
import likeIkon from "./../../assets/img/like.svg";
import dislikeIcon from "./../../assets/img/dislike.svg";
import clockIcon from "./../../assets/img/clock.svg"


function Headliner() {
   return (
      <article className="headliner">
         <img className="thumbnail-img" src={thumbnail} alt="thumbnail-icon" />
         <div className="info">
            <h1 className="title">Hate speech vs free speech</h1>
            <div className="rating">
               <div className="like">
                  <img src={likeIkon} alt="like-icon" />
                  <span className="text">10.8k</span>
               </div>
               <div className="dislike">
                  <img src={dislikeIcon} alt="dislike-icon" />
                  <span className="text">1.4k</span>
               </div>
            </div>
            <div className="news">
               <span className="label">BBC NEWS</span>
               <div className="time">
                  <img className="time-icon" src={clockIcon} alt="clock-icon" />
                  <span className="time-text">2:00 pm</span>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Headliner;