import styles from "./reviews.module.scss"
import ReviewsImg from "../../assets/img/doctors/reviewsImg.png";
import ReviewsCard from "@/components/reviews/reviews-card/reviews-card";
import Image from "next/image";
import reviewsData from "@/components/reviews/reviews-data";

export default function Reviews() {
    return (
        <div className={styles.rewiews}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        Отзывы и истории пациентов
                    </div>
                    <div className={styles.reviewsWrap}>
                        <div className={styles.desc}>
                            <p>
                                “Мне повезло вовремя найти того самого мануального терапевта. Не теряйте время, как я —
                                приходите сразу в «Максмед»“.
                            </p>
                        </div>
                        <div className={styles.reviewsImage}>
                            <div className={styles.imgWrap}>
                                <Image className={styles.img} src={ReviewsImg} alt="reviews" />
                            </div>
                            <div className={styles.name}>
                                Анастасия<br/> Федорова
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}>
                    </div>
                    <div className={styles.all}>
                        {reviewsData.map((reviewsDataItem,index) => {
                            return <ReviewsCard
                                key={index}
                                avatar={reviewsDataItem.avatar}
                                name={reviewsDataItem.name}
                                text={reviewsDataItem.text}
                                link={reviewsDataItem.link}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}