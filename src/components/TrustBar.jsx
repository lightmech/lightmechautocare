function TrustBar({ t }) {
  const items = [
    { icon: "📍", title: t.trust1Title, text: t.trust1Text },
    { icon: "🔧", title: t.trust2Title, text: t.trust2Text },
    { icon: "⚡", title: t.trust3Title, text: t.trust3Text },
    { icon: "💲", title: t.trust4Title, text: t.trust4Text },
  ];

  return (
    <section className="trust-bar section">
      {items.map((item, index) => (
        <article key={index} className="trust-card">
          <span>{item.icon}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default TrustBar;
