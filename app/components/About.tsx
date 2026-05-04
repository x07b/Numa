import './About.css';
import SafeImage from './SafeImage';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-label">Notre Histoire</span>
          <h2>Un havre de créativité et de saveurs</h2>
        </div>

        <div className="about-content">
          <div className="about-images">
            <div className="about-image-featured fade-in-scale">
              <SafeImage
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=500&fit=crop"
                alt="Nüma brunch experience"
              />
            </div>
          </div>

          <div className="about-text fade-in-scale">
            <p className="about-description">
              Nüma est bien plus qu'un simple café. C'est un lieu pensé pour les âmes créatives,
              les amoureux de bonne nourriture et ceux qui cherchent à ralentir dans un monde trop rapide.
            </p>
            <p className="about-description">
              Inspirés par la beauté naturelle de Tunis et la philosophie d'une vie mindful,
              nous avons créé un espace où chaque détail compte—des matériaux naturels aux sourires
              de nos baristas.
            </p>
            <p className="about-description">
              Notre menu raconte une histoire : tradition rencontrée modernité,
              ingrédients locaux sublimés avec créativité.
            </p>
          </div>
        </div>

        <div className="about-images-secondary">
          <div className="about-image-secondary fade-in-scale">
            <SafeImage
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=400&h=400&fit=crop"
              alt="Cozy ambiance"
            />
          </div>
          <div className="about-image-secondary fade-in-scale">
            <SafeImage
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop"
              alt="Specialty coffee"
            />
          </div>
          <div className="about-image-secondary fade-in-scale">
            <SafeImage
              src="https://images.unsplash.com/photo-1511633786486-a01980e01a18?w=400&h=400&fit=crop"
              alt="Interior design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
