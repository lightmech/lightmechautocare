function MobileService({ t, whatsappLink }) {
  return (
    <section id="mobile-service" className="mobile-service section">
      <div className="mobile-service-copy">
        <p className="section-kicker">{t.navMobileService}</p>
        <h2>{t.mobileServiceTitle}</h2>
        <p className="hero-text">{t.mobileServiceSubtitle}</p>

        <ul className="mobile-service-list">
          <li>{t.mobileServiceFeature1}</li>
          <li>{t.mobileServiceFeature2}</li>
          <li>{t.mobileServiceFeature3}</li>
        </ul>
      </div>

      <div className="mobile-service-card">
        <h3>{t.mobileServiceCardTitle}</h3>
        <ol>
          <li>{t.mobileServiceCardStep1}</li>
          <li>{t.mobileServiceCardStep2}</li>
          <li>{t.mobileServiceCardStep3}</li>
        </ol>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-green">
          💬 {t.whatsappButton}
        </a>
      </div>
    </section>
  );
}

export default MobileService;
