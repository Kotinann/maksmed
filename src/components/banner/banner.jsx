import styles from './banner.module.scss'
import BannerIcon from "../../assets/icons/banner-icon.svg"


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.bannerMobImg}>
                    </div>
                    <div className={styles.bannerRow}>
                        <div className={styles.bannerTextBlock}>
                            <div className={styles.bannerLogo}>
                                <BannerIcon/>
                            </div>
                            <div className={styles.bannerTitle}>
                                Клиника мануальной терапии и массажа
                            </div>
                            <div className={styles.bannerDescr}>
                                Основатель и главный врач — дипломированный мануальный терапевт Гаркин Максим. Стаж более 18 лет.
                            </div>
                            <div className={styles.bannerButton}>
                                <a className={styles.bannerButtonOpen} href="#">
                                    Заказать звонок
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}