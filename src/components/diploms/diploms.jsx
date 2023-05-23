import styles from "./diploms.module.scss";
import Diplom1 from "../../assets/img/diploms/diplom1.jpg";
import Diplom2 from "../../assets/img/diploms/diplom2.jpg";
import Diplom3 from "../../assets/img/diploms/diplom3.jpg";
import Diplom4 from "../../assets/img/diploms/diplom4.jpg";
import Diplom5 from "../../assets/img/diploms/diplom5.jpg";
import Diplom6 from "../../assets/img/diploms/diplom6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import { Navigation } from "swiper";

export default function Diploms() {
    return (
        <div className={styles.diploms}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Дипломы и сертификаты
                    </h2>
                    <div className={styles.slider}>
                        <Swiper
                            navigation={true}
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><Image src={Diplom1}  alt="диплом"/></SwiperSlide>
                            <SwiperSlide><Image src={Diplom2} alt="диплом"/></SwiperSlide>
                            <SwiperSlide><Image src={Diplom3} alt="диплом"/></SwiperSlide>
                            <SwiperSlide><Image src={Diplom4} alt="диплом"/></SwiperSlide>
                            <SwiperSlide><Image src={Diplom5} alt="диплом"/></SwiperSlide>
                            <SwiperSlide><Image src={Diplom6} alt="диплом"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )

}

