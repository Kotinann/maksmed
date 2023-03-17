import styles from "./info.module.scss"
import Image from "next/image";
import infoDoc from "../../assets/img/doctors/infoDoc.png"
import infoPatient from "../../assets/img/doctors/infoPatient.png"

export default function Info() {
    return (
        <div className={styles.info}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        О КЛИНИКЕ И ВРАЧЕ
                    </h2>
                    <div className={styles.block}>
                        <div className={styles.textWrap}>
                            <h3 className={styles.subTitle}>
                                Опытный, мотивированный специалист
                            </h3>
                            <div className={styles.text}>
                                <p>
                                    Меня зовут Гаркин Максим Михайлович. Я врач мануальный терапевт. Стаж 18 лет. В
                                    студенчестве
                                    занимался лечебным массажем, после окончания ВУЗа год работал травматологом, потом
                                    мануальным терапевтом.
                                </p>
                                <p>
                                    С детства была тяга к точности и рациональности. Именно это и перенёс в работу. Каждый
                                    сеанс
                                    проходит по схеме: диагностика, подготовка, коррекция, контроль изменений. Каждая новая
                                    технология, которую я изучил проходит по этой схеме. В работе остаются только наиболее
                                    безопасные и эффективные методы.
                                </p>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <Image src={infoDoc} alt="doctor" width={360} height={360} />
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.image}>
                            <Image src={infoPatient} alt="doctor" width={360} height={360} />
                        </div>
                        <div className={styles.textWrap}>
                            <h3 className={styles.subTitle}>
                                Эффективные и безопасные методы
                            </h3>
                            <div className={styles.text}>
                                <p>
                                    Мануальная терапия - это набор методик диагностики и лечения опорно-двигательного
                                    аппарата (мышц, сухожилий, суставов и т д) и связанных с ними симптомов. Основная цель
                                    терапии - восстановить подвижность и положение суставов, улучшить мышечную
                                    координацию.
                                </p>
                                <p>
                                    На самом деле поводов и показаний обратиться больше. Правильный путь - это пройти
                                    предварительную консультацию, чтобы узнать показана ли Вам мануальная терапия.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
