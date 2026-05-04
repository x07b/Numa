import './Hero.css';
import SafeImage from './SafeImage';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-kicker">NÜMA COFFEE &amp; KITCHEN</span>

          <h1 className="hero-title slide-in-up">
            Un lieu où la nature rencontre <span className="hero-title-accent">l’art culinaire</span>
          </h1>

          <p className="hero-subtitle fade-in">
            Brunch artisanal, cafés de spécialité et douceur d’un lieu pensé pour ralentir — au cœur de Tunis.
          </p>

          <div className="hero-cta-buttons fade-in">
            <a className="btn-primary" href="#menu">
              Voir le menu
            </a>
            <a className="btn-secondary" href="#location">
              Réserver maintenant
            </a>
          </div>

          <div className="hero-chips" aria-label="Categories">
            <span className="chip">Brunch</span>
            <span className="chip">Pâtisserie</span>
            <span className="chip">Specialty coffee</span>
            <span className="chip">Terrasse</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-media">
            <div className="hero-media-glow" aria-hidden="true" />
            <SafeImage
              className="hero-image"
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1400&h=1000&fit=crop"
              alt="Brunch signature chez Nüma"
            />
            <div className="hero-media-overlay" aria-hidden="true" />
          </div>
        </div>
      </div>

      <a className="hero-scroll-indicator" href="#about">
        <span>Découvrez</span>
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
  );
}
