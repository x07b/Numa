import './Menu.css';

const menuItems = [
  {
    id: 1,
    name: 'Pain Perdu Pistache',
    description: 'Brioche dorée, crème pistache maison, noisettes caramélisées',
    price: '12 DT',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Avocado Toast Premium',
    description: 'Pain levain grillé, avocat mûr, ricotta, tomate confite, microgreens',
    price: '10.5 DT',
    image: 'https://images.unsplash.com/photo-1587521177488-f23a468eea4f?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Eggs Benedict Classique',
    description: 'Œuf poché, bacon fumé, sauce hollandaise, muffin anglais',
    price: '11 DT',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Cortado Signature',
    description: 'Espresso double, lait cuit à la vapeur, saveur équilibrée et veloutée',
    price: '3.5 DT',
    image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=400&h=400&fit=crop'
  }
];

export default function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <div className="menu-header">
          <span className="section-label">Saveurs</span>
          <h2>Notre Menu Signature</h2>
          <p>Chaque plat est une célébration des saveurs, préparés avec soin et passion</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card fade-in-scale">
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-card-overlay">
                  <button className="btn-details">Détails</button>
                </div>
              </div>
              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p className="menu-description">{item.description}</p>
                <div className="menu-card-footer">
                  <span className="menu-price">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <button className="btn-full-menu">Voir le menu complet</button>
        </div>
      </div>
    </section>
  );
}
