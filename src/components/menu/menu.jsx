import styles from './menu.module.scss'
import LogoIcon from "../../assets/icons/logo.svg"
import VkIcon from "@/assets/icons/vk.svg";
import InstIcon from "@/assets/icons/inst.svg";


export default function Menu() {
    return (
        <nav className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.burger}>
                    <a className={styles.hamburger} href="#">
                        <span></span>
                    </a>
                </div>
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
                {/*<div className={styles.mobClose}>
                    <nav className={styles.menuNav}>
                        <ul className={styles.mobList}>
                            <li className={styles.mobItem}>
                                <a className={styles.mobLink} href="#">
                                    О клинике
                                </a>
                            </li>
                            <li className={styles.mobItem}>
                                <a className={styles.mobLink} href="#">
                                    Цены
                                </a>
                            </li>
                            <li className={styles.mobItem}>
                                <a className={styles.mobLink} href="#">
                                    Отзывы
                                </a>
                            </li>
                            <li className={styles.mobItem}>
                                <a className={styles.mobLink} href="#">
                                    Дипломы
                                </a>
                            </li>
                            <li className={styles.mobItem}>
                                <a className={styles.mobLink} href="#">
                                    Документы
                                </a>
                            </li>
                            <li className={styles.mobItem}>
                                <a className={styles.mobLink} href="#">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.mobSocial}>
                        <div className={styles.social}>
                            <a href="#" className={styles.vkIcon}>
                                <VkIcon/>
                            </a>
                            <a href="#" className={styles.instIcon}>
                                <InstIcon/>
                            </a>
                        </div>
                    </div>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}
