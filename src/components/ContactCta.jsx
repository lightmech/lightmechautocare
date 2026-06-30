function ContactCta({ t, phoneLink, phone, whatsappLink }) {
  return (
    <section id="contact" className="cta section">
      <div>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
      </div>

      <div className="cta-buttons">
        <a href={phoneLink} className="btn btn-red">
          📞 {phone}
        </a>

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-green">
          💬 {t.whatsappButton}
        </a>
      </div>
    </section>
  );
}

export default ContactCta;
