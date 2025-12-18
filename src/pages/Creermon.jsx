import "../style/creemon.css"
import "../style/media-qurey.css"
export const Creer = () => {
  return (
   <>
   <section >
    <div className="container creer-mon" >
      <div className="cree-mon-baner">
        <div className="left-side-img">
          <img src="left-side.png" alt="" />
        </div>
        <div className="center-contenet">
          <div className="center-contenet-head">
            <h1>✍️ Une offre <span>sans engagement </span>
               adaptée à votre activité</h1>
          </div>
          <div className="offer-content">
            <div className="offer-btn">
              <button className="offer-button offer-btn-gree">Indépendant</button>
              <button className="offer-button offer-btn-white">Petite entreprise ou entreprise</button>
              <button className="offer-button offer-btn-white">Création</button>
            </div>
            <div className="offer-ring">
              <span className="ring-sp">Offre la plus choisie</span>
            </div>

          </div>
          <div className="bottom-contenet">
            <div className="bottom-main">
              <h2>Dès 45€ HT / Mois</h2>
              <span>Offre Small</span>
              <p>Un Expert-Comptable Comptaways vous accompagne dans l'accompagnement de votre entreprise individuelle avec un accès à notre application pro.</p>
            </div>

            <div className="bottom-list">
              <div className="bottom-lis-content">
                <h3>Inclus dans l’offre</h3>
              </div>
              <div>
                <ul className="bottom-list-icon">
                   <li>Création de votre entreprise incluse</li>
                    <li>Application comptable offerte</li>
                     <li>Module de facturation</li>
                     </ul>
                  </div>
                  <div className="bottom-para">
                    <p>Consulter l’offre en détail <img src="arrow.png" alt="" /></p>
                  </div>
            </div>
          </div>
        </div>
        <div className="right-side-img">
          <img src="right-side.png" alt="" />
        </div>
      </div>
    </div>
   </section>
   <Minicreehero/>
   </>
  );
};
export const Minicreehero = () => {
  return (
    <>
    <section>
      <div className="container mini-cree-container" >
        <div className="mini-cree-hero">
          <div className="mini-hero-img">
            <img src="women-cree.png" alt="" />
          </div>
          <div className="mini-cree-hero-content">
            <div className="head-mini-cree">
              <h1>🤝 Vous êtes  accompagné  par nos équipes</h1>
            </div>
            <div className="mini-cree-para">
              <h4>La compta devient simple</h4>
              <p>Tout au long de l'année vous pouvez contacter votre conseiller dédié (Léa, Morgane, Omar...) qui vous répondra.</p>
              <button className="mini-btn-para">Demander mon devis !</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

