import styles from "./reviews-card.module.scss"
import ReviewsAvatar from "../../../assets/img/doctors/avatar.png";
import Image from "next/image";

export default function ReviewsCard() {
    return (
        <div className={styles.card}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        <div className={styles.head}>
                            <div className={styles.avatar}>
                                <Image src={ReviewsAvatar} alt="avatar1"/>
                            </div>
                            <a href="#" className={styles.all}>Все отзывы</a>
                        </div>
                        <div className={styles.body}>
                            <h3 className={styles.name}>Светлана Батаева</h3>
                            <div className={styles.text}>
                                <p>
                                    В прямом смысле в клинике мануальной терапии ставят на ноги и возвращают к жизни без
                                    боли. Большая благодарность доктору Максиму Гаркину и отдельное спасибо
                                    массажисту. <br/>Если беспокоит спина рекомендую, обращайтесь в клинику Максмед!
                                </p>

                            </div>
                        </div>
                        <a href="#" className={styles.link}>Перейти к отзыву »</a>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.head}>
                            <div className={styles.avatar}>
                                <Image src={ReviewsAvatar} alt="avatar1"/>
                            </div>
                            <a href="#" className={styles.all}>Все отзывы</a>
                        </div>
                        <div className={styles.body}>
                            <h3 className={styles.name}>Ловкова Дарья</h3>
                            <div className={styles.text}>
                                <p>
                                    Пришла с болью в спине. Проходила курс. Все прошло. Больше не болит. Порхаю как бабочка. Все вежливые. Все комфортно. Никто не нарушает личных границ.
                                </p>
                            </div>
                        </div>
                        <a href="#" className={styles.link}>Перейти к отзыву »</a>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.head}>
                            <div className={styles.avatar}>
                                <Image src={ReviewsAvatar} alt="avatar1"/>
                            </div>
                            <a href="#" className={styles.all}>Все отзывы</a>
                        </div>
                        <div className={styles.body}>
                            <h3 className={styles.name}>Литвякова Ольга</h3>
                            <div className={styles.text}>
                                <p>
                                    Обратилась к Максиму Михайловичу с болью в шейном отделе по отзывам и рекомендациям многих знакомых, которым он также помог, как и мне! Спасибо за ваш профессионализм!
                                </p>
                            </div>
                        </div>
                        <a href="#" className={styles.link}>Перейти к отзыву »</a>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.head}>
                            <div className={styles.avatar}>
                                <Image src={ReviewsAvatar} alt="avatar1"/>
                            </div>
                            <a href="#" className={styles.all}>Все отзывы</a>
                        </div>
                        <div className={styles.body}>
                            <h3 className={styles.name}>Лавриенко Дарья</h3>
                            <div className={styles.text}>
                                <p>
                                    Обратилась к Максиму Михайловичу с болью в шее и пояснице, за 5 сеансов все прошло, самочувствие отличное! Перед приемом делают отличный медицинский массаж. Врач очень внимательный, клиника уютная, комфортная, приветливый администратор.
                                </p>
                            </div>
                        </div>
                        <a href="#" className={styles.link}>Перейти к отзыву »</a>
                    </div>
                </div>
            </div>
        </div>
    )
}