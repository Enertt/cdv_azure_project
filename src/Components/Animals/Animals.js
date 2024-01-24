import React from 'react'
import s from "./animals.module.css"
import { zooVector } from "../../assets/images";
import HeroAnimals from '../../sections/HeroAnimals';
import { NavLink } from 'react-router-dom';
import AnimalGallery from '../../sections/AnimalGallery';
import { MoreInfo, Welcome, Footer } from "../../sections";

const Animals = () => {
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

      <HeroAnimals />

      {/* More Info Section */}
      <section className={s.section}>
        <div className={s.container}>
          <AnimalGallery />
        </div>
      </section>

      <section style={{ marginBottom: "50px" }} className={s.section}>
        <div className={s.container}>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Animals