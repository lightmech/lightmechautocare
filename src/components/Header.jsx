function Header({ t, phoneLink, phone }) {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <img src="/logo.png" alt="LightMech Auto Care" />
      </a>

      <nav>
        <a href="#home">{t.navHome}</a>
        <a href="#services">{t.navServices}</a>
        <a href="#mobile-service">{t.navMobileService}</a>
        <a href="#why">{t.navWhy}</a>
        <a href="#contact">{t.navContact}</a>
      </nav>

      <a href={phoneLink} className="phone-card">
        <span>📞 {t.callNow}</span>
        <strong>{phone}</strong>
      </a>
    </header>
  );
}

export default Header;
