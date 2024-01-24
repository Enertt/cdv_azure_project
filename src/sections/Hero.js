import s from "./hero.module.css";

const Hero = () => {
  return (
    <section className={s.heroSection}>
      {/* <div className={s.container}> */}
      <div className={s.heroContainer}>
        <h1 className={s.heroSectionTitle}>
          Przyjdź zobaczyć zwierzęta <br />w naszym zoo
        </h1>
        <button className={s.heroSectionButton}>Bilety</button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
