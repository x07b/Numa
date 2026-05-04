import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">Nüma</span>
          <span className="logo-sub">Coffee & Kitchen</span>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#about">À Propos</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#location">Lieu</a></li>
        </ul>

        <div className="nav-cta">
          <button className="btn-reserve">Réserver</button>
        </div>
      </div>
    </nav>
  );
}
