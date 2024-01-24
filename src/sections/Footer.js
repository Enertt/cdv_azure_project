import { partners, icons } from "../assets/images";
import { socialIcons } from "../constants";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div class={s.footerContainer}>
        <img src={partners}></img>
      </div>
      <div className={s.socials}>
        <h3>Contact us, follow us</h3>
        {/* <h3>Facebook, Twitter, Instagram, Youtube</h3> */}
        <div className={s.iconsContainer}>
          {socialIcons.map((item) => (
            <svg key={item.name} width="28px" height="28px">
              <use href={item.href}></use>
            </svg>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
