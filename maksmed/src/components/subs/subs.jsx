import styles from "./subs.module.scss"
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";

export default function Subs() {
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
                    <form ref={form} onSubmit={sendEmail} className={styles.form}>
                        <div>
                            <input className={styles.email} id="email" type="text" name="email" placeholder="e-mail"/>
                        </div>
                        <button className={styles.btn} disabled={isLoading}><a>Подписаться</a></button>
                        <div className={styles.footer}>
                            Мы никому не передадим ваш e-mail
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
