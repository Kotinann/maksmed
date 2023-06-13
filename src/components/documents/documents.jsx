import styles from "./documents.module.scss"

export default function Documents() {
    return (
        <div className={styles.documents} id="documents">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        Документы
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="https://disk.yandex.ru/i/72OVbJriH_GF4w" target="_blank"  rel="noreferrer" >
                                Лицензия с приложением
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="https://disk.yandex.ru/i/e5czXxETU4Lm-Q" target="_blank"  rel="noreferrer" >
                                Свидетельство о поставновке на учет в налоговом органе
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="https://disk.yandex.ru/i/JpyNH45jDLc5CA" target="_blank"  rel="noreferrer" >
                                Санитарно-эпидемиологическое заключение
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="https://disk.yandex.ru/i/DwdyFcuxaIDugw" target="_blank"  rel="noreferrer" >
                                Информация о врачах, ведущих прием в клинике
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2012
                        </div>
                        <div className={styles.name}>
                            <a href="https://disk.yandex.ru/i/PaAuwMBI3AtBXQ" target="_blank"  rel="noreferrer" >
                                Постановление &quot;Об утверждении Правил предоставления медицинскими организациями платных медицинских услуг&quot;
                            </a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}