import styles from './header.module.scss'

export default function Header() {
    return (<div className={styles.header}>
                <div className="row no-gutters">
                    <div className="col-7 col-xl-4">
                        <div className="logo">
                            <a href='#'>
                                <img src="public/img/icon/logo.svg" alt="logo">
                                    <div className="logo__sitename">
                                        <div className="german-flag german-flag_vertical">

                                        </div>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-5 col-xl-8 header__right">
                        <div className="contact-info d-none d-xl-flex">
                            <div className="contact-info__item ml-2">
                                <div className="contact-info__icon">
                                    <img src="assets/img/icon/place-localizer.svg" alt="">
                                </div>
                                <div className="contact-info__text">Пермь, <br> ул. Куйбышева, 71/1</div>
                            </div>
                            <div className="contact-info__item justify-content-end ml-7">
                                <div className="contact-info__icon">
                                    <div className="icon icon-clock">
                                        <img src="assets/img/icon/clock.svg" alt="">
                                    </div>
                                </div>
                                <div className="contact-info__text">
                                    <div className="contact-info__text-row">
                                        <div className="contact-info__text-day">ПН-ПТ:</div>
                                        <div className="contact-info__text-hour">09:00~21:00</div>
                                    </div>
                                    <div className="contact-info__text-row">
                                        <div className="contact-info__text-day">СБ:</div>
                                        <div className="contact-info__text-hour">10:00~15:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="phone-block"><a className="phone-block__callback popup-form" href="#callback">Заказать
                            звонок</a>
                            <div className="phone-block__phone"><a href="tel:+73422079694"><span
                                className="phone-block__phone-code">(342)</span><span
                                className="phone-block__phone-number">207-96-94</span></a></div>
                        </div>
                    </div>
                </div>
    </div>
)

}