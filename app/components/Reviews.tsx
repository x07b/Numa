import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Créatrice Graphique',
    review: 'Un endroit parfait pour travailler et se reconnecter à soi-même. Le café est incroyable, et l\'atmosphère est tellement inspirante.',
    rating: 5
  },
  {
    id: 2,
    name: 'Habib L.',
    role: 'Entrepreneur',
    review: 'J\'aime revenir ici chaque semaine. Le personnel est chaleureux, la nourriture est fraîche, et le Wi-Fi est fiable. Exactement ce qu\'il me fallait.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amira K.',
    role: 'Photographe',
    review: 'Chaque coin du lieu est instagrammable. Nüma c\'est plus qu\'un café, c\'est une expérience à partager.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <span className="section-label">Avis Clients</span>
          <h2>Ils Adorent Nüma</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card fade-in-scale">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-text">"{review.review}"</p>
              <div className="review-author">
                <h4>{review.name}</h4>
                <span className="review-role">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
