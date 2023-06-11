import styles from './header.module.scss'
import LogoIcon from "../../assets/icons/logo.svg"
import PlaceIcon from "../../assets/icons/place-localizer.svg"
import ClockIcon from "../../assets/icons/clock.svg"
import PhoneIcon from "../../assets/icons/phone.svg"
import Link from "next/link";

export default function Header({ setMobileActive, mobileActive, setModalActive}) {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logoLink}>
                            <LogoIcon />
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.contactInfo}>
                            <a
                              href="https://yandex.uz/maps/-/CCU1bAWcHD"
                              target="_blank"
                              className={styles.contactInfoItem}
                              rel="noreferrer"
                            >
                                <div className={styles.contactInfoIcon}>
                                    <PlaceIcon />
                                </div>
                                <div className={styles.contactInfoText}>Самара,<br/>ул. Ново-Садовая улица, 252</div>
                            </a>
                            <div className={styles.contactInfoItem}>
                                <div className={styles.contactInfoIcon}>
                                    <ClockIcon />
                                </div>
                                <div className={styles.contactInfoText}>
                                    <div className={styles.contactInfoDay}>ПН, СР, ПТ: </div>
                                    <div className={styles.contactInfoHour}>09:00~20:00</div>
                                </div>
                            </div>
                        </div>
                        <a href="tel:+79272602065" className={styles.phoneIcon}>
                            <PhoneIcon />
                        </a>
                        <div className={styles.phoneBlock}>
                            <a className={styles.callback} onClick={() => setModalActive(true)} href="#callback">
                                Заказать звонок
                            </a>
                            <span className={styles.phoneCode}>(927)</span>
                            <span className={styles.phoneNumber}>260-20-65</span>
                        </div>
                        {
                            mobileActive ? (
                              <button
                                className={styles.close}
                                onClick={() => setMobileActive(!mobileActive)}
                              >
                                  <div className={styles.closeLine}></div>
                                  <div className={styles.closeLine}></div>
                              </button>
                            ) : (
                              <button
                                className={styles.hamburger}
                                onClick={() => setMobileActive(!mobileActive)}
                              >
                                  <div className={styles.hamburgerLine}></div>
                                  <div className={styles.hamburgerLine}></div>
                                  <div className={styles.hamburgerLine}></div>
                              </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}
