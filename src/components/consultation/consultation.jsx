import styles from './consultation.module.scss'
import { clsx } from 'clsx';
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";

export default function Consultation({openModal, setOpenModal}) {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        emailjs.sendForm('service_kpsbbuu', 'template_99c1k6m', form.current, 'EJprqL8qWLn78RovH')
          .then(() => {
              setIsLoading(false);
              setIsSubmitted(true);
              form.current.reset();
          }, (error) => {
              setError(error.text)
          });
    };
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
                    <form ref={form} onSubmit={sendEmail} className={styles.form}>
                        <div>
                            <input className={styles.phone} id="phone" type="tel" name="phone" placeholder="телефон"/>
                        </div>
                        <button className={styles.btn} disabled={isLoading}><a>записаться</a></button>
                        <div className={styles.footer}>
                            Действуем в соответствии с <a href="/privacy" target="_blank">политикой конфиденциальности</a>
                        </div>
                    </form>
                    {
                      error && <div className={styles.error}>{error}</div>
                    }
                    {
                      isSubmitted && <div className={styles.submitted}>Сообщение успешно отправлено!</div>
                    }
                </div>
            </div>
        </div>
    )
}
