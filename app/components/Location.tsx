import './Location.css';

export default function Location() {
  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <div className="location-content">
          <div className="location-info fade-in-scale">
            <span className="section-label">Nous Visiter</span>
            <h2>Bienvenue chez Nüma</h2>
            
            <div className="info-block">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Adresse</h4>
                  <p>Rue Mouawiya Ibn Abi Sofiene<br />Tunis, Tunisie</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <h4>Horaires</h4>
                  <p>Lundi - Dimanche<br />08:00 - 00:00</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Contact</h4>
                  <p><a href="tel:+21698765432">+216 98 765 432</a><br /><a href="mailto:hello@numa.tn">hello@numa.tn</a></p>
                </div>
              </div>
            </div>

            <button className="btn-contact">
              Nous Contacter
            </button>
          </div>

          <div className="location-map fade-in-scale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.1234567890!2d10.1969!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM5JzI3LjYiTiAxMMKwMDcnNDQuNiJF!5e0!3m2!1sfr!2stn!4v1234567890123"
              width="100%"
              height="400"
              style={{border: 0, borderRadius: '2px'}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
