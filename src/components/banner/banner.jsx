import styles from './banner.module.scss'
import BannerIcon from "../../assets/icons/banner-icon.svg"


export default function Banner({setModalActive}) {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.image}></div>
                    <div className={styles.row}>
                        <div className={styles.textBlock}>
                            <div className={styles.logo}>
                                <BannerIcon/>
                            </div>
                            <div className={styles.title}>
                                Клиника мануальной терапии и массажа
                            </div>
                            <div className={styles.descr}>
                                Основатель и главный врач — дипломированный мануальный терапевт Гаркин Максим. Стаж более 17 лет.
                            </div>
                            <div className={styles.button}>
                                <button
                                  className={styles.buttonOpen}
                                  onClick={() => setModalActive(true)}
                                >
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
