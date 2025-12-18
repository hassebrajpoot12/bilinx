import "../style/Footer.css"
export const Footer = () => {
  return (
    <>
    <section className="footer-sec">
      <div className="container footer-container">
        <div className="footer-img-content">
          <div className="footer-left">
            <div className="footer-img-content">
              <div className="footer-im">
                <img src="Group.png" alt="" />
              </div>
              <div className="footer-co">
              <h1>Comptaway</h1>
              </div>
            </div>
            <div className="footer-left-content">
              <p>Comptaways est un cabinet inscrit à l’Ordre des Experts comptables 100 % en ligne.</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-list">
              <ul>
                <li style={{fontWeight:"700"}}>Notre site</li>
                <li>Comptabilité</li>
                <li>Créer mon entreprise</li>
                <li>Tarifs</li>
                <li>Accès client</li>
                <li>Notre appli</li>
              </ul>
            </div>
            <div className="footer-list">
              <ul>
                <li style={{fontWeight:"700"}}>Pages légales</li>
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
              </ul>
            </div>
            <div className="footer-list">
              <ul>
                <li style={{fontWeight:"700"}}>Nous suivre</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div className="footer-list">
              <ul>
                <li style={{fontWeight:"700"}}>Aide & Service client</li>
                <li>06 99 10 75 73</li>
                <li>Instagram</li>
                <li>aide@comptaways.fr</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
        <p className="lastco">Made with 💚 by 4Beez - Agence de communication</p>
    </section>
    </>
  );
};
