import styles from './mobile.module.scss'
import VkIcon from "@/assets/icons/vk.svg";
import InstIcon from "@/assets/icons/inst.svg";

export default function Mobile() {
    return (
        <div className={styles.mob}>
            <nav className={styles.nav}>
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
            </nav>
            <div className={styles.social}>
                <a href="#" className={styles.vkIcon}>
                    <VkIcon/>
                </a>
            </div>
        </div>
    )
}
