import Nav from "../Components/Main/Main";
import s from "./animalGallery.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react';

const AnimalGallery = () => {
    // https://ytsipakfunctionapp.azurewebsites.net/api/PeopleFn?code=IE0sXJw31yMxDBShXh_3-KYgrDbi4Zs8VZP0lOSW2QSUAzFuO-2O0g==
    const [data, setData] = useState(null);

  useEffect(() => {
    // Функция для выполнения GET-запроса
    const fetchData = async () => {
      try {
        // Выполняем GET-запрос и получаем данные
        const response = await axios.get('https://ytsipakfunctionapp.azurewebsites.net/api/PeopleFn?code=IE0sXJw31yMxDBShXh_3-KYgrDbi4Zs8VZP0lOSW2QSUAzFuO-2O0g==');
        
        // Обновляем состояние данными
        setData(response.data);
      } catch (error) {
        // Обрабатываем ошибку, если она возникла
        console.error('Ошибка при выполнении GET-запроса:', error);
      }
    };

    // Вызываем функцию при монтировании компонента
    fetchData();
  }, []);

  return (
    <div>
      <ul className={s.moreInfoList}>
        {data && (
          data.map((item) => (
            <li key={item.id} className={s.moreInfoItem}>
              <article className={s.moreInfoCard}>
                <img className={s.cardImage} src={item.photoUrl}></img>
                <h3 className={s.cardTitle}>{item.name}</h3>
              </article>
            </li>
          ))
        )}
      </ul>
      <NavLink to='/database'><button className={s.moreInfoButton}>See more</button></NavLink>
    </div>
  );
};

export default AnimalGallery;