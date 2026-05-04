import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <div className="hero-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=700&fit=crop")'}}>
        </div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title slide-in-up">
            Un lieu où la nature<br />rencontre l'art culinaire
          </h1>
          
          <p className="hero-subtitle fade-in">
            Où chaque moment devient une expérience
          </p>

          <div className="hero-cta-buttons fade-in">
            <button className="btn-primary">
              Voir le menu
            </button>
            <button className="btn-secondary">
              Réserver une table
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Découvrez</span>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
