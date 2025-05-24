import styles from './menu.module.scss'
import LogoIcon from "../../assets/icons/logo.svg"
import VkIcon from "@/assets/icons/vk.svg";
import InstIcon from "@/assets/icons/inst.svg";
import Mobile from "@/components/menu/mobile-menu/mobile";


export default function Menu() {
    return (
        <nav className={styles.menu}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a className={styles.link} href="#info">
                            О клинике
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#price">
                            Цены
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#reviews">
                            Отзывы
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#diploms">
                            Дипломы
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#documents">
                            Документы
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#contact">
                            Контакты
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
