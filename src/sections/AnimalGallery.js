import Nav from "../Components/Main/Main";
import s from "./animalGallery.module.css";
import { NavLink } from "react-router-dom";

const AnimalGallery = () => {
    const animalArray = []
    // запрос на получение списка животных
    // запись результата запроса в animalArray

  return (
    <div>
      {/* <ul className={s.moreInfoList}>
        {animalsInfo.map((item) => (
          <li key={item.id} className={s.moreInfoItem}>
            <article className={s.moreInfoCard}>
              <img className={s.cardImage} src={item.photoUrl}></img>
              <h3 className={s.cardTitle}>{item.name}</h3>
            </article>
          </li>
        ))}
      </ul> */}
      <NavLink to='/database'><button className={s.moreInfoButton}>See more</button></NavLink>
    </div>
  );
};

export default AnimalGallery;