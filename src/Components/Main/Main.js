import s from "./main.module.css";
import logoImg from "../../assets/images/ZOO LOGO.png";

const Main = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <nav className={s.headerNav}>
            <a href="/">
              <img src={logoImg}></img>
            </a>
            <ul className={s.headerMenu}>
              <li>
                <a className={s.headerLink}>About us</a>
              </li>
              <li>
                <a className={s.headerLink}>Animals</a>
              </li>
              <li>
                <a className={s.headerLink}>Prices</a>
              </li>
              <button>CONTACT US</button>
            </ul>
          </nav>
        </div>
      </header>
      <section className={s.heroSection}>
        {/* <div className={s.container}> */}
        {/* <div className={s.mainBlock}>
            <div className={s.infoBlock}> */}
        <div className={s.heroContainer}>
          <h1 className={s.heroSectionTitle}>
            Przyjdź zobaczyć zwierzęta <br />w naszym zoo
          </h1>
          <button className={s.heroSectionButton}>Bilety</button>
          {/* </div>
          </div> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Main;
