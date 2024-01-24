import s from "./main.module.css";
import { zooVector } from "../../assets/images";
import { Hero, MoreInfo, Welcome, Footer } from "../../sections";

const Nav = () => {
  return (
    <>
      <section>
        <header className={s.header}>
          <div className={s.container}>
            <nav className={s.headerNav}>
              <a href="/">
                <img src={zooVector}></img>
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
      </section>

      {/* Hero Section */}

      <Hero />

      {/* More Info Section */}
      <section className={s.section}>
        <div className={s.container}>
          <MoreInfo />
        </div>
      </section>

      <section className={(s.section, s.welcomeSection)}>
        <div className={s.container}>
          <Welcome />
        </div>
      </section>

      <section style={{ marginBottom: "50px" }} className={s.section}>
        <div className={s.container}>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Nav;
