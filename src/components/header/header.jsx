import styles from './header.module.scss'
import LogoIcon from "../../assets/icons/logo.svg"
import PlaceIcon from "../../assets/icons/place-localizer.svg"
import ClockIcon from "../../assets/icons/clock.svg"

export default function Header({ setMobileActive, mobileActive }) {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <a className={styles.logoLink} href="#">
                            <LogoIcon />
                        </a>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactInfoItem}>
                                <div className={styles.contactInfoIcon}>
                                    <PlaceIcon />
                                </div>
                                <div className={styles.contactInfoText}>Самара,<br/>ул. Ново-Садовая улица, 252</div>
                            </div>
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
                        <div className={styles.phone}>
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
