import styles from './contact.module.scss'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h2 className={styles.title}>Удобное расположение</h2>
        <p className={styles.desc}>
          5 минут до ближайшей остановки автобуса или трамвая.
        </p>
      </div>
      <div className={styles.mapWrap}>
        <div className={styles.info}>
          <div className={styles.infoTlt}>«МАКСМЕД»</div>
          <div className={styles.infoDescr}>Клиника мануальной терапии Гаркина Максима</div>
          <address className={styles.address}>г.Самара, ул.Ново-Садовая 252</address>
          <div className={styles.regim}>
              <div className={styles.day}>пн, ср, пт:</div>
              <div className={styles.hour}><b>09:00~20:00</b></div>
          </div>
          <div className={styles.contact}>
            <div className={styles.contactPhone}><a href="tel:+79272602065">(927) 260-20-65</a></div>
            <div className={styles.contactCallback}><a className="popup-form open-modal" href="#callback"
                                                            data-modal-id="callback">Заказать звонок</a></div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A060addf7ababf0ac377639165f3dcea9e8690a00803aab7aad7351abc9a37aa2&amp;source=constructor"
            width="100%" height="100%" frameBorder="0" scroll="false" className="lazy-loaded"></iframe>
      </div>
      </div>
    </section>
  )
}
