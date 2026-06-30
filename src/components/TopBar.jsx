function TopBar({ topLocation, lang, setLang, t }) {
  return (
    <div className="top-strip">
      <p>📍 {topLocation}</p>

      <div className="language-switch">
        <button
          className={lang === "es" ? "active" : ""}
          onClick={() => setLang("es")}
        >
          ES {t.langEs}
        </button>
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
        >
          EN {t.langEn}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
