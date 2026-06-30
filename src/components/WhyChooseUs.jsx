function WhyChooseUs({ t }) {
  const points = [t.why1, t.why2, t.why3, t.why4, t.why5];

  return (
    <section id="why" className="why section">
      <div className="why-copy">
        <p className="section-kicker">{t.whySmall}</p>
        <h2>{t.whyTitle}</h2>

        <ul>
          {points.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
      </div>

      <div className="review-card">
        <h3>★★★★★</h3>
        <p>“{t.reviewText}”</p>
        <strong>{t.reviewClient}</strong>
      </div>
    </section>
  );
}

export default WhyChooseUs;
