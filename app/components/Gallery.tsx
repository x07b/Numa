import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=500&h=500&fit=crop',
    alt: 'Latte art'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&h=500&fit=crop',
    alt: 'Coffee beans'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop',
    alt: 'Specialty coffee'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=500&h=500&fit=crop',
    alt: 'Café ambiance'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop',
    alt: 'Brunch spread'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1571407614721-fed379c2f986?w=500&h=500&fit=crop',
    alt: 'Café details'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop',
    alt: 'Interior design'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1559925393-36ac3fed4351?w=500&h=500&fit=crop',
    alt: 'Food presentation'
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-label">Galerie</span>
          <h2>L'Atmosphère Nüma</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-item fade-in-scale">
              <img src={item.image} alt={item.alt} />
              <div className="gallery-overlay">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 7v10M7 12h10"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-follow">
          <p>Suivez-nous sur Instagram pour plus d'inspiration</p>
          <a href="#" className="social-link">@numatunisia</a>
        </div>
      </div>
    </section>
  );
}
