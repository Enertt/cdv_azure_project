import s from "./moreInfo.module.css";
import { animalsInfo } from "../constants";
import {
  catImg,
  timeSvg,
  ticketImg,
  visitZoo,
  feedsImg,
} from "../assets/images";

const MoreInfo = () => {
  return (
    <div>
      <h2>More Information</h2>
      <ul className={s.moreInfoList}>
        {animalsInfo.map((item) => (
          <li key={item.title} className={s.moreInfoItem}>
            <article className={s.moreInfoCard}>
              <img className={s.cardImage} src={item.imgUrl}></img>
              <h3 className={s.cardTitle}>{item.title}</h3>
            </article>
          </li>
        ))}
      </ul>
      <button className={s.moreInfoButton}>Check the visiting info</button>
    </div>
  );
};

export default MoreInfo;
