import styles from "./reviews.module.scss"
import reviewsImg from "../../assets/img/doctors/reviewsImg.png";
import Image from "next/image";
import ReviewsCard from "@/components/reviews/reviews-card/reviews-card";

export default function Reviews() {
    return (
        <div className={styles.rewiews}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        Отзывы и истории пациентов
                    </div>
                    <div className={styles.subtitle}>
                        100% реальные. Возможно вы знаете кого-то из них
                    </div>
                    <div className={styles.reviewsWrap}>
                        <div className={styles.desc}>
                            <p>
                                “Мне повезло вовремя найти того самого мануального терапевта. Не теряйте время, как я —
                                приходите сразу в «Максмед»“.
                            </p>
                        </div>
                        <div className={styles.ReviewsImage}>
                        <div className={styles.Img}>
                            <Image src={reviewsImg} alt="reviews" />
                        </div>
                        <div className={styles.name}>
                            Анастасия Федорова
                        </div>
                        </div>
                    </div>
                    <div className={styles.all}>
                        <ReviewsCard />
                        <ReviewsCard />
                        <ReviewsCard />
                        <ReviewsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}