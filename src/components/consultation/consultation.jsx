import styles from './consultation.module.scss'

export default function Consultation() {
    return (
        <div className={styles.overlay}>
                <div className={styles.consultation}>
                    <div className={styles.close}>

                    </div>
                    <h2 className={styles.title}>
                        Запланировать визит
                    </h2>
                    <div className={styles.row}>
                        <p className={styles.desc}>
                            Оставьте свой номер телефона. Администратор свяжется с Вами для уточнения деталей и запишет
                            на удобное время.
                        </p>
                        <form className={styles.form}>

                        </form>
                        <p className={styles.footer}>
                            Действуем в соответствии с <a>политикой конфиденциальности</a>
                        </p>
                    </div>
                </div>
        </div>
    )
}