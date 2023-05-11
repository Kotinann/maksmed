import styles from "./diploms.module.scss"

export default function Diploms() {
    return (
        <div className={styles.diploms}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Дипломы и сертификаты
                    </h2>
                    <div className={styles.slider}>
                        <div className={styles.list}>
                            <div className={styles.slide}>
                                <div className={styles.img}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
