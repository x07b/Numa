import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    title: 'Ingrédients Premium',
    description: 'Sourcing minutieux avec producteurs locaux et artisanaux',
    icon: '🌿'
  },
  {
    id: 2,
    title: 'Atmosphère Cozy',
    description: 'Espace pensé pour la détente, la créativité et la sérénité',
    icon: '☕'
  },
  {
    id: 3,
    title: 'Wi-Fi Haut Débit',
    description: 'Connexion rapide et stable pour travailler ou créer',
    icon: '📡'
  },
  {
    id: 4,
    title: 'Service Bienveillant',
    description: 'Équipe passionnée, à l\'écoute et généreuse de son temps',
    icon: '💝'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-header">
          <span className="section-label">Pourquoi Nous</span>
          <h2>L'Expérience Nüma</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card fade-in-scale">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
