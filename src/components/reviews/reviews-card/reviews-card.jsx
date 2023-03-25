import styles from "./reviews-card.module.scss"
import ReviewsAvatar from "../../../assets/img/doctors/avatar.png";
import Image from "next/image";

export default function ReviewsCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.block}>
                <div className={styles.head}>
                    <div className={styles.avatar}>
                        <Image src={props.avatar} alt="avatar1"/>
                    </div>
                    <a href={props.link} target="_blank"  className={styles.all}>Все отзывы</a>
                </div>
                <div className={styles.body}>
                    <h3 className={styles.name}>{props.name}</h3>
                    <div className={styles.text}>
                        <p>
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}