function Hero({ t, phoneLink, whatsappLink }) {
  const checks = [
    t.check1,
    t.check2,
    t.check3,
    t.check4,
    t.check5,
    t.check6,
  ];

  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">{t.heroSmall}</p>
        <h1>
          {t.heroTitle1}
          <span>{t.heroTitle2}</span>
        </h1>
        <p className="hero-text">{t.heroText}</p>

        <div className="hero-checks">
          {checks.map((item, index) => (
            <span key={index}>✓ {item}</span>
          ))}
        </div>

        <div className="hero-buttons">
          <a href={phoneLink} className="btn btn-red">
            📞 {t.callButton}
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-green">
            💬 {t.whatsappButton}
          </a>
          <a href="#contact" className="btn btn-outline">
            📋 {t.quoteButton}
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-ring"></div>
        <img src="/logo.png" alt="LightMech Auto Care" />
      </div>
    </section>
  );
}

export default Hero;
