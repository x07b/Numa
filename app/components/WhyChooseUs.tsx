import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    title: 'Ingrédients Premium',
    description: 'Sourcing minutieux avec producteurs locaux et artisanaux',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Atmosphère Cozy',
    description: 'Espace pensé pour la détente, la créativité et la sérénité',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Wi-Fi Haut Débit',
    description: 'Connexion rapide et stable pour travailler ou créer',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Service Bienveillant',
    description: 'Équipe passionnée, à l\'écoute et généreuse de son temps',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2-1c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5c-2.33 0-7 1.17-7 3.5V19h14v-8.5c0-2.33-4.67-3.5-7-3.5zm7 9h-14v-2.5c0-.83 3.05-1.5 7-1.5s7 .67 7 1.5V15z"/>
      </svg>
    )
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
              <div className="feature-icon">
                {typeof feature.icon === 'string' ? feature.icon : feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
