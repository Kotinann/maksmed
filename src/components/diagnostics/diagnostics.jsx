import styles from "./diagnostics.module.scss"
import Image from "next/image";
import diagnosticsPath from "@/assets/img/doctors/Path.jpg";
import diagnocticsProblems from "@/assets/img/doctors/Problems.jpg";

export default function Diagnostics() {
    return (
        <div className={styles.diagnostics}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        Мануальная терапия
                    </div>
                    <div className={styles.subtitle}>
                        Точность диагностики и качество лечения
                    </div>
                    <div className={styles.block}>
                        <div className={styles.image}>
                            <Image src={diagnocticsProblems} alt="diagnostics" width={725} height={500}/>
                        </div>
                        <div className={styles.info}>
                            <h4 className={styles.tlt}>
                                С какими проблемами ко мне обращаются:
                            </h4>
                            <ul className={styles.list}>
                                <li className={styles.items}>
                                    Боли в спине, боли в суставах, боли в мышцах.
                                </li>
                                <li className={styles.items}>
                                    Ограничение подвижности в различных суставах, нарушение осанки (сколиозы, сутулость,
                                    анталгические положения).
                                </li>
                                <li className={styles.items}>
                                    Неврологические боли, головные боли.
                                </li>
                                <li className={styles.items}>
                                    Повышенное артериальное давление.
                                </li>
                                <li className={styles.items}>
                                    Протрузии, экструзии, грыжи межпозвоночных дисков.
                            </li>
                                <li className={styles.items}>
                                    Восстановительный период после травм опорно-двигательной системы.
                                </li>
                                <li className={styles.items}>
                                Ишиас (защемление седалищного нерва).
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.info}>
                            <h4 className={styles.tlt}>
                                Правильный путь - это пройти предварительную консультацию, чтобы узнать показана ли Вам
                                мануальная терапия. Цель консультации:
                            </h4>
                            <ul className={styles.list}>
                                <li className={styles.items}>
                                    Выяснить биомеханическое состояние опорно-двигательного аппарата.
                                </li>
                                <li className={styles.items}>
                                    Определиться с показаниями и противопоказаниями к процедуре.
                                </li>
                                <li className={styles.items}>
                                    Определить перспективы лечебного процесса.
                                </li>
                                <li className={styles.items}>
                                    Расписать план лечения (режим, медикаментозные средства, количество процедур).
                                </li>
                            </ul>
                        </div>
                        <div className={styles.image}>
                            <Image src={diagnosticsPath} alt="diagnostics" width={725} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}