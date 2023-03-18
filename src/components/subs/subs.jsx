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
                        {/*<div className={styles.form}>*/}
                        {/*    <form className={styles.formForm} id="recSubForm" action="#">*/}
                        {/*        <fieldset className={styles.formFields}>*/}
                        {/*            <div className={styles.formGroup}>*/}
                        {/*                <input className={styles.formControl} id="email" name="email" type="email"*/}
                        {/*                       placeholder="e-mail" required/>*/}
                        {/*            </div>*/}
                        {/*            <input type="hidden" name="formTitle" value="Запись на консультацию">*/}
                        {/*                <input type="hidden" name="go" value="recConsult"/>*/}
                        {/*                <button className={styles.btn} type="submit">*/}
                        {/*                    Записаться*/}
                        {/*                </button>*/}
                        {/*        </fieldset>*/}
                        {/*        <div className={styles.formFooter}>*/}
                        {/*            Действуем в соответствии с <a href="#">политикой конфиденциальности</a>*/}
                        {/*        </div>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                </div>
            </div>
        </div>
    )
}