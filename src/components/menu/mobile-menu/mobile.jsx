import styles from './mobile.module.scss'
import VkIcon from "@/assets/icons/vk.svg";
import InstIcon from "@/assets/icons/inst.svg";
import PlaceIcon from "@/assets/icons/place-localizer.svg";
import ClockIcon from "@/assets/icons/clock.svg";

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
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                        <PlaceIcon />
                    </div>
                    <div className={styles.contactInfoText}>Самара,<br/>ул. Ново-Садовая улица, 252</div>
                </div>
                <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                        <ClockIcon />
                    </div>
                    <div className={styles.contactInfoText}>
                        <div className={styles.contactInfoDay}>ПН, СР, ПТ: </div>
                        <div className={styles.contactInfoHour}>09:00~20:00</div>
                    </div>
                </div>
            </div>
            <div className={styles.social}>
                <a href="https://m.vk.com/maksmedclinic" target="_blank" className={styles.vkIcon}>
                    <VkIcon/>
                </a>
            </div>
        </div>
    )
}
