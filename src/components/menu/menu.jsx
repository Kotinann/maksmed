import styles from './menu.module.scss'
import LogoIcon from "../../assets/icons/logo.svg"

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.menuMobile}>
                    <a href="#"><span></span></a>
                </div>
                <div className={styles.menuLogo}>
                    <a className={styles.menuLogoLink}  href="#">
                        <LogoIcon />
                    </a>
                </div>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">
                            О клинике
                        </a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">
                            Цены
                        </a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">
                            Отзывы
                        </a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">
                            Дипломы
                        </a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">
                            Документы
                        </a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">
                            Контакты
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}