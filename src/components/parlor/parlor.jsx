import styles from "./parlor.module.scss"

export default function Parlor({setModalActive}) {
    return (
        <div className={styles.parlor}>
            <div className="container">
                <div className={styles.mobImage}>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.row}>
                        <div className={styles.textBlock}>
                            <h2 className={styles.title}>
                                Комфортный, оборудованный кабинет для приема
                            </h2>
                            <div className={styles.descr}>
                                Интерьер — это залог правильного психологического настроя. Мы постарались создать
                                удобное, красивое и уютное окружение, чтобы вам было легко настроиться на лечение.
                            </div>
                            <button
                                className={styles.btn}
                                onClick={() => setModalActive(true)}
                            >
                                Записаться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}