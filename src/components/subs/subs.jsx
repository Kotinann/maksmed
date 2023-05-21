import styles from "./subs.module.scss"


export default function Subs() {
    return (
        <div className={styles.subs}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>
                            Подпишитесь
                        </h3>
                        <div className={styles.subtitle}>
                            И узнавайте первыми о скидках, акциях, интересных статьях от экспертов клиники
                        </div>
                    </div>
                    <form className={styles.form}>
                        <div>
                            <input className={styles.email} id="email" type="text" placeholder="e-mail"/>
                        </div>
                        <button className={styles.btn}><a>Подписаться</a></button>
                        <div className={styles.footer}>
                            Мы никому не передадим ваш e-mail
                           </div>
                    </form>
                </div>
            </div>
        </div>
    )
}