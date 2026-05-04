import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text fade-in-scale">
            <span className="section-label">Notre Histoire</span>
            <h2>Un havre de créativité et de saveurs</h2>
            <p>
              Nüma est bien plus qu'un simple café. C'est un lieu pensé pour les âmes créatives, 
              les amoureux de bonne nourriture et ceux qui cherchent à ralentir dans un monde trop rapide.
            </p>
            <p>
              Inspirés par la beauté naturelle de Tunis et la philosophie d'une vie mindful, 
              nous avons créé un espace où chaque détail compte—des matériaux naturels aux sourires 
              de nos baristas.
            </p>
            <p>
              Notre menu raconte une histoire : tradition rencontrée modernité, 
              ingrédients locaux sublimés avec créativité.
            </p>
          </div>

          <div className="about-images">
            <div className="about-image-large fade-in-scale">
              <img 
                src="https://images.unsplash.com/photo-1511633786486-a01980e01a18?w=600&h=600&fit=crop"
                alt="Interior Nüma"
              />
            </div>
            <div className="about-images-small">
              <div className="about-image-small fade-in-scale">
                <img 
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=280&h=280&fit=crop"
                  alt="Cozy ambiance"
                />
              </div>
              <div className="about-image-small fade-in-scale">
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=280&h=280&fit=crop"
                  alt="Specialty coffee"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
