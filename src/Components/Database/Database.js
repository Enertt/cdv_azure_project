import React from 'react'
import s from "./database.module.css"
import { zooVector } from "../../assets/images";
import HeroAnimals from '../../sections/HeroAnimals';
import { NavLink } from 'react-router-dom';
import AnimalGallery from '../../sections/AnimalGallery';
import { MoreInfo, Welcome, Footer } from "../../sections";

const Database = () => {
  return (
    <>
      <section>
        <header className={s.header}>
          <div className={s.container}>
          <nav className={s.headerNav}>
              <NavLink to='/'>
                <img src={zooVector}></img>
              </NavLink>
              <ul className={s.headerMenu}>
                <li>
                  <a className={s.headerLink}>About us</a>
                </li>
                <li>
                  <NavLink to='/animals' className={s.headerLink}>Animals</NavLink>
                </li>
                <li>
                  <a className={s.headerLink}>Prices</a>
                </li>
                <button>CONTACT US</button>
              </ul>
            </nav>
          </div>
        </header>
      </section>

      {/* Hero Section */}
      <h3 className={s.title}>DATABASE</h3>
      <div className={s.tableWrapper}>
        <div className={s.tableTitle}>
          <div className={s.tableColumnPhoto}>FOTO</div>
          <div className={s.tableColumnName}>NAZWA</div>
          <div className={s.tableColumnAdd}>DODAJ</div>
          <div className={s.tableColumnMod}>ZMODYFIKUJ</div>
          <div className={s.tableColumnDel}>USUŃ</div>
        </div>
        <div className={s.tableContentWrapper}>
          {/* Тут будет map который по данным из json будет делать новые строки таблицы,
           наполняя ее контентом по примеру ниже*/}
          <div className={s.tableContent}>
            <div className={s.tableContentPhoto}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS8dxrpeqPID4pzafxlSNHO2NEogeraiTJFOHoj-YyO7jV0e7'} />
            </div>
            <div className={s.tableContentName}>Lion</div>
            <div className={s.tableContentAdd}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </div>
            <div className={s.tableContentMod}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </div>
            <div className={s.tableContentDel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </div>
          </div>
          <div className={s.tableContent}>
            <div className={s.tableContentPhoto}>
              <img src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/90677327_2524620527851856_6376887804370092032_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=-6yj0wXIXmwAX_En3Oq&_nc_ht=scontent-waw1-1.xx&oh=00_AfD0R6VxI8U_KigEzurxlJWPxhHCXnLVzeyAIkvjQEBT-Q&oe=65D8B7D4'} />
            </div>
            <div className={s.tableContentName}>Danylo Yakovenko</div>
            <div className={s.tableContentAdd}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </div>
            <div className={s.tableContentMod}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </div>
            <div className={s.tableContentDel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>


      <section style={{ marginBottom: "50px" }} className={s.section}>
        <div className={s.container}>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Database