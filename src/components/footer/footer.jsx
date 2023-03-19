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
                            <div className={styles.license}>
                                <p>ООО «Максмед».<br/>Пермь, Самара, ул.Ново-Садовая 252
                                    <br/>Лицензия № ЛО-63-01-004694 от 4 июля 2018 г.</p>
                            </div>
                            <div className={styles.footerSocial}>
                                <div className={styles.social}>
                                    <a href="#" className={styles.vkIcon}>
                                        <VkIcon/>
                                    </a>
                                    <a href="#" className={styles.instIcon}>
                                        <InstIcon/>
                                    </a>
                                </div>
                            </div>
                    </div>
                        <div className={styles.proticopokaz}>
                            <p>
                                Внимание! Имеются противопоказания. необходима консультация специалиста
                            </p>
                        </div>
                    <div className={styles.cookie}>
                        <p>
                            Этот сайт использует «cookies». Условия использования «cookies» см. на странице
                            «Конфиденциальность персональной информации». Также сайт использует Интернет-сервис
                            для
                            сбора технических данных касательно посетителей с целью получения маркетинговой и
                            статистической информации. Условия обработки данных посетителей сайта см. в <a
                            href="/privacy.html">Политике конфиденциальности</a>. Нажимая кнопку «ОК», вы
                            подтверждаете ваше согласие на обработку данных на указанных выше условиях.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}