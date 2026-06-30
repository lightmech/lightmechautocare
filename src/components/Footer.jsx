function Footer({ t, phone }) {
  return (
    <footer className="footer section">
      <div className="footer-brand">
        <img src="/logo.png" alt="LightMech Auto Care" />
        <p>{t.footerText}</p>
      </div>

      <div>
        <h3>{t.quickLinks}</h3>
        <a href="#home">{t.navHome}</a>
        <a href="#services">{t.navServices}</a>
        <a href="#mobile-service">{t.navMobileService}</a>
        <a href="#contact">{t.navContact}</a>
      </div>

      <div>
        <h3>{t.contactTitle}</h3>
        <p>📞 {phone}</p>
        <p>📍 Clermont, FL</p>
        <p>📸 @lightmechautocare</p>
      </div>

      <small>© 2026 LightMech Auto Care. {t.rights}</small>
    </footer>
  );
}

export default Footer;
