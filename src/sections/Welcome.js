import s from "./welcome.module.css";
import { enotImg, enotPng, terenZoo } from "../assets/images";

const Welcome = () => {
  return (
    <>
      <div className={s.welcomeContainer}>
        <img src={enotPng}></img>
        <h2>
          Welcome! <br />
          <p>
            We warmly welcome you and appreciate your visiting <br />
            the zoo poznań.
          </p>
        </h2>
      </div>
      <img className={s.zooTerenImg} src={terenZoo}></img>
    </>
  );
};

export default Welcome;
