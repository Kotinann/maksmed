import styles from "./price.module.scss"

export default function Price() {
    return (
        <div className={styles.price} id="price">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.priceTitle}>
                        Цены на услуги мануальной терапии
                    </div>
                    <div className={styles.priceSubtitle}>
                        В нашей клинике вы не столкнетесь со скрытыми платежами. Указанные цены включают все материалы,
                        работу и контрольные осмотры, необходимые для качественного полноценного оказания услуги.
                    </div>
                    <div className={styles.priceWrap}>
                        <div className={styles.priceWrapTitle}>
                            Медицинские услуги
                        </div>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceName}>
                                Консультация
                            </div>
                            <div className={styles.pricePrice}>
                                1000 руб.
                            </div>
                        </div>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceName}>
                                Мануальная терапия
                            </div>
                            <div className={styles.pricePrice}>
                                2700 руб.
                            </div>
                        </div>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceName}>
                                Мануальная терапия (Для детей до 14 лет)
                            </div>
                            <div className={styles.pricePrice}>
                                2000 руб.
                            </div>
                        </div>
                    </div>
                    {/*<a href="#" className={styles.priceBtn}>*/}
                    {/*    Все услуги »*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>
    )
}