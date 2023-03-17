import styles from './contact.module.scss'

export default function Contact() {
  
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h2 className={styles.title}>Удобное расположение в центре города</h2>
        <p className={styles.desc}>
          5 минут до ближайшей остановки автобуса троллейбуса или трамвая, а на нашей парковке всегда найдется место.
        </p>
      </div>
      <div className={styles.map}>
        <div className="drive-dir__info">
          <div className="drive-dir__info-tlt">«Денити»</div>
          <div className="drive-dir__info-descr">Экспертная стоматология Ильи Неменатова</div>
          <address className="drive-dir__address">г. Пермь, ул. Куйбышева, 71/1</address>
          <div className="drive-dir__regim">
            <div className="row">
              <div className="col-4">ПН-ПТ:</div>
              <div className="col-8"><b>09:00~21:00</b></div>
            </div>
            <div className="row">
              <div className="col-4">СБ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div className="col-8"><b>10:00~15:00</b></div>
            </div>
          </div>
          <div className="drive-dir__contact">
            <div className="drive-dir__contact-phone"><a href="tel:+73422483586">(342) 248-35-86</a></div>
            <div className="drive-dir__contact-callback"><a className="popup-form open-modal" href="#callback"
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
