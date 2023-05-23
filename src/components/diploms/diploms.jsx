import styles from "./diploms.module.scss";
import { SliderData} from './slider-data.js';
import ArrowALeft from "@/assets/img/diploms/ArrowLeft.png";
import ArrowRight from "@/assets/img/diploms/ArrowRight.png";

export default function Diploms() {
    return (
        <div className={styles.diploms}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Дипломы и сертификаты
                    </h2>
                </div>
            </div>
        </div>
    )

}

