function Services({ t, services }) {
  return (
    <section id="services" className="services section">
      <p className="section-kicker">{t.servicesSmall}</p>
      <h2>{t.servicesTitle}</h2>

      <div className="service-grid">
        {services.map((item, index) => (
          <article className="service-card" key={index}>
            <div className="service-icon">{item[0]}</div>
            <h3>{item[1]}</h3>
            <p>{item[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
