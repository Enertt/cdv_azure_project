import s from './main.module.css'
import logoImg from '../../assets/images/ZOO LOGO.png'

const Main = () => {
    return(
        <div className={s.wrapper}>
            <header className={s.header}>
                <div className={s.logoBlock}>
                    <img src={logoImg}></img>
                </div>
                <div className={s.navBlock}>
                    <nav>
                        <span>ABOUT US</span>
                        <span>ANIMALS</span>
                        <span>PRICES</span>
                        <button className={s.contactButton}>
                            <span>CONTACT US</span>
                        </button>
                    </nav>
                </div>
            </header>
            <div className={s.mainBlock}>
                <div className={s.infoBlock}>
                    <span>Przyjdź zobaczyć zwierzęta w naszym zoo</span>
                    <button>Bilety</button>
                </div>
            </div>
        </div>
    )
}

export default Main