import styles from './consultation.module.scss'
import { clsx } from 'clsx';
import {useState} from "react";

export default function Consultation() {
    
    const [modalActive, setModalActive] = useState(true)
    console.log(modalActive)
    return (
        <div className={clsx(
            styles.overlay,
            modalActive && styles.overlayActive
            )}>
            <div className={styles.consultation}>
                <div
                  className={styles.close}
                  onClick={() => setModalActive(!modalActive)}
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
                            Действуем в соответствии с <a href="#">политикой конфиденциальности</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
