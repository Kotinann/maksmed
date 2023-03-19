import styles from './footer.module.scss'
import VkIcon from "../../assets/icons/vk.svg";
import InstIcon from "../../assets/icons/inst.svg";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.menu}>
                        <ul className={styles.list}>
                            <li className={styles.items}>
                                <a href="#" className={styles.link}>
                                    Главная
                                </a>
                            </li>
                            <li className={styles.items}>
                                <a href="#" className={styles.link}>
                                    О клинике
                                </a>
                            </li>
                            <li className={styles.items}>
                                <a href="#" className={styles.link}>
                                    Цены
                                </a>
                            </li>
                            <li className={styles.items}>
                                <a href="#" className={styles.link}>
                                    Отзывы
                                </a>
                            </li>
                            <li className={styles.items}>
                                <a href="#" className={styles.link}>
                                    Дипломы и сертификаты
                                </a>
                            </li>
                            <li className={styles.items}>
                                <a href="#" className={styles.link}>
                                    Документы
                                </a>
                            </li>
                            <li className={styles.items}>
                                <a href="#" className={styles.link}>
                                    Политика конфиденциальности
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.reverseCol}>
                        <div className={styles.lisense}>
                            <p>ООО «Максмед».<br/>Пермь, Самара, ул.Ново-Садовая 252
                                <br/>Лицензия № ЛО-63-01-004694 от 4 июля 2018 г.</p>
                        </div>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.footerSocial}>
                            <div className={styles.social}>
                                <a href="#" className={styles.vkIcon}>
                                    <VkIcon />
                                </a>
                                <a href="#" className={styles.instIcon}>
                                    <InstIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
)
}