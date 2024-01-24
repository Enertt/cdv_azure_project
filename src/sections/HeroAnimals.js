import s from "./heroAnimals.module.css";

const HeroAnimals = () => {
  return (
    <section className={s.heroSection}>
      {/* <div className={s.container}> */}
      <div className={s.heroContainer}>
        <h1 className={s.heroSectionTitle}>
          OUR ANIMALS
        </h1>
        
      </div>
      {/* </div> */}
    </section>
  );
};

export default HeroAnimals;