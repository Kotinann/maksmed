import styles from './consultation.module.scss'
import { clsx } from 'clsx';

export default function Consultation({openModal, setOpenModal}) {
    return (
        <div className={clsx(
            styles.overlay,
            openModal && styles.overlayActive
            )}>
            <div className={styles.consultation}>
                <div
                  className={styles.close}
                  onClick={() => setOpenModal(!openModal)}
                />
                <h2 className={styles.title}>
                    Запланировать визит
                </h2>
                <div className={styles.row}>
                    <p className={styles.desc}>
                        Оставьте свой номер телефона. Администратор свяжется с Вами для уточнения деталей и запишет
                        на удобное время.
                    </p>
                    <form className={styles.form}>
                        <div>
                            <input className={styles.phone} id="phone" type="tel" placeholder="телефон"/>
                        </div>
                        <button className={styles.btn}><a>записаться</a></button>
                        <div className={styles.footer}>
                            Действуем в соответствии с <a href="/privacy">политикой конфиденциальности</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
