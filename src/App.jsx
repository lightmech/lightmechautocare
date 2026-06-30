import { useState } from "react";
import translations from "./translations";
import "./App.css";

const phone = "352-881-2560";
const phoneLink = "tel:3528812560";
const whatsappLink = "https://wa.me/13528812560";

function App() {
  const [lang, setLang] = useState("es");
  const [openFaq, setOpenFaq] = useState(0);
  const t = translations[lang];

  const services = [
    { icon: "⚙️", title: t.serviceDiagnosticsTitle, text: t.serviceDiagnosticsText },
    { icon: "🛑", title: t.serviceBrakesTitle, text: t.serviceBrakesText },
    { icon: "🛢️", title: t.serviceOilTitle, text: t.serviceOilText },
    { icon: "🔋", title: t.serviceBatteryTitle, text: t.serviceBatteryText },
    { icon: "🛞", title: t.serviceSuspensionTitle, text: t.serviceSuspensionText },
    { icon: "🧰", title: t.serviceGeneralTitle, text: t.serviceGeneralText },
  ];

  const trustPoints = [
    { icon: "🛠️", title: t.trustOneTitle, text: t.trustOneText },
    { icon: "⏱️", title: t.trustTwoTitle, text: t.trustTwoText },
    { icon: "🧩", title: t.trustThreeTitle, text: t.trustThreeText },
    { icon: "📍", title: t.trustFourTitle, text: t.trustFourText },
  ];

  const processSteps = [
    { title: t.stepOneTitle, text: t.stepOneText },
    { title: t.stepTwoTitle, text: t.stepTwoText },
    { title: t.stepThreeTitle, text: t.stepThreeText },
  ];

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="top-bar">
          <p>📍 {t.topLocation}</p>
          <div className="language-switch">
            <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>
              ES {t.langEs}
            </button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
              US {t.langEn}
            </button>
          </div>
        </div>

        <div className="nav-shell">
          <a href="#home" className="brand-mark">
            <img src="/logo.png" alt="LightMech Auto Care" />
          </a>

          <nav className="main-nav">
            <a href="#home">{t.navHome}</a>
            <a href="#services">{t.navServices}</a>
            <a href="#why">{t.navWhy}</a>
            <a href="#contact">{t.navContact}</a>
          </nav>

          <a href={phoneLink} className="header-phone">
            <span>📞 {t.callNow}</span>
            <strong>{phone}</strong>
          </a>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">{t.heroBadge}</p>
          <h1>
            {t.heroTitle1}
            <span>{t.heroTitle2}</span>
          </h1>
          <p className="hero-copy">{t.heroText}</p>

          <div className="hero-actions">
            <a href={phoneLink} className="btn btn-primary">
              📞 {t.callButton}
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-dark">
              💬 {t.whatsappButton}
            </a>
          </div>

          <div className="hero-metrics">
            <article>
              <strong>24/7</strong>
              <span>{t.statOne}</span>
            </article>
            <article>
              <strong>Clermont</strong>
              <span>{t.statTwo}</span>
            </article>
            <article>
              <strong>Premium</strong>
              <span>{t.statFour}</span>
            </article>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <img src="/logo.png" alt="LightMech Auto Care" />
            <div className="hero-card-list">
              <div>
                <strong>🧠</strong>
                <p>{t.heroBulletOne}</p>
              </div>
              <div>
                <strong>⚡</strong>
                <p>{t.heroBulletTwo}</p>
              </div>
              <div>
                <strong>🚗</strong>
                <p>{t.heroBulletThree}</p>
              </div>
              <div>
                <strong>📋</strong>
                <p>{t.heroBulletFour}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="trust points">
        {trustPoints.map((point) => (
          <article key={point.title}>
            <span>{point.icon}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <p className="section-kicker">{t.servicesKicker}</p>
          <h2>{t.servicesTitle}</h2>
          <p className="section-intro">{t.servicesIntro}</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase-grid" id="why">
        <div className="panel-card panel-card-dark">
          <p className="section-kicker">{t.whyKicker}</p>
          <h2>{t.whyTitle}</h2>
          <p className="section-intro">{t.whyIntro}</p>
          <ul className="feature-list">
            <li>{t.benefitOne}</li>
            <li>{t.benefitTwo}</li>
            <li>{t.benefitThree}</li>
            <li>{t.benefitFour}</li>
          </ul>
        </div>

        <div className="panel-card panel-card-light">
          <p className="section-kicker">{t.processKicker}</p>
          <h2>{t.processTitle}</h2>
          <p className="section-intro">{t.processIntro}</p>

          <div className="process-stack">
            {processSteps.map((step, index) => (
              <div className="process-pill" key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section coverage-section">
        <div className="coverage-card">
          <div>
            <p className="section-kicker">{t.coverageKicker}</p>
            <h2>{t.coverageTitle}</h2>
          </div>
          <p>{t.coverageText}</p>
          <a href={phoneLink} className="btn btn-primary">
            📞 {phone}
          </a>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>{t.faqTitle}</h2>
          <p className="section-intro">{t.faqIntro}</p>
        </div>

        <div className="faq-list">
          {t.faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                <button type="button" className="faq-question" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                  <span>{item.question}</span>
                  <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
        </div>
        <div className="cta-actions">
          <a href={phoneLink} className="btn btn-primary">
            📞 {phone}
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-dark">
            {t.whatsappButton}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <img src="/logo.png" alt="LightMech Auto Care" />
          <p>{t.footerText}</p>
        </div>
        <div>
          <h3>{t.quickLinks}</h3>
          <a href="#home">{t.navHome}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#why">{t.navWhy}</a>
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
    </main>
  );
}

export default App;