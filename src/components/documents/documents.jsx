import styles from "./documents.module.scss"

export default function Documents() {
    return (
        <div className={styles.documents}>
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
                            <a href="#">
                                Лицензия с приложением
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="#">
                                Свидетельство о поставновке на учет в налоговом органе
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="#">
                                Санитарно-эпидемиологическое заключение
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="#">
                                Лицензия с приложением
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2018
                        </div>
                        <div className={styles.name}>
                            <a href="#">
                                Информация о врачах, ведущих прием в клинике
                            </a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.year}>
                            2012
                        </div>
                        <div className={styles.name}>
                            <a href="#">
                                Постановление "Об утверждении Правил предоставления медицинскими организациями платных медицинских услуг"
                            </a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}