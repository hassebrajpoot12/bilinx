import "../style/Netro.css"
export const Notre = () => {
  return (
  <>
  <section className="panda-section">
    <div className="panda-img">
      <img src="panda.png" alt="" />
    </div>
    <div className="panda-con-cir">
      <img src="purple-circle.png" alt="" />
    </div>
    <div className="container panda-conatiner">
      <div className="panda-content-img">
        <div className="pnada-content">
          <div className="main-panda-head">
            <h1>💻 Découvrez le fonctionnement
            de notre <span>logiciel partenaire</span></h1>
          </div>
          <div className="panda-para-list">
            <div className="panda-para">
              <p>Connectez vous simplement à votre application. Vous avez accès à votre compta bancaire, découvrez les fonctionalités pratiques :</p>
            </div>
            <div className="panda-list">
              <ul>
                <li>Module de facturation et de relance clients.</li>
                <li>Vos indicateurs clés. (Graphiques de trésorerie, Création de graphiques personnalisés illimité)</li>
                <li>Synchronisation bancaire</li>
                <li>Collecte des achats.</li>
                <li>Bénéficiez de la valeur probante</li>
              </ul>
            </div>
            <div className="panda-paraicon">
              <p>Et plus encore ! <img src="arrow.png" alt="" /></p>
            </div>
          </div>
          <div className="panda-btn">
            Entrez votre adresse mail
            <button>Je souscris maintenant !</button>
          </div>
        </div>
        <div className="panda-img">
          <img src="laptop.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <Notrevision/> 
  </>
  )
};




export const Notrevision = () => {
  return (
    <>
    <section>
      <div className="container notrevision-con">
        <div className="Notre-vision-banner">
          <div className="left-notre-vision">
            <div className="left-notre-head">
              <h1>
                🎉 De nombreux entrepreneurs comme vous <span>rejoignent </span>
                 Comptaways
              </h1>
            </div>
            <div className="left-notre-para">
              <p>
                Aujourd'hui, l'entrepreneur a besoin d'être accompagné. Avec Comptaways vous ne renoncez pas au conseil en choisissant un cabinet en ligne. Nous faisons les deux.Contactez-nous. Discutons de votre projet.
              </p>
            </div>
          </div>
          <div className="center-notre-vision">
            <img src="notre-vision.png" alt=""/>
          </div>
          <div className="right-notre-vision">
            <div className="right-head">
              <h4>Notre vision</h4>
            </div>
            <div className="right-notre-list">
              <div className="right-box">
                <div className="right-box-img">
                  <img src="card-iocn.png" alt="" />
                </div>
                <div className="right-box-para">
                  <p>Nous nous engageons à rendre la comptabilité simple pour les entrepreneurs.</p>
                </div>
              </div>
              <div className="right-box">
                <div className="right-box-img">
                  <img src="fish-icon.png" alt="" />
                </div>
                <div className="right-box-para">
                  <p>Comptaways est un service 100% en ligne, 100% digital, 100% eco friendly</p>
                </div>
              </div>
              <div className="right-box">
                <div className="right-box-img">
                  <img src="bulbe-icon.png" alt="" />
                </div>
                <div className="right-box-para">
                  <p>Nous nous engageons à proposer toujours les solutions les plus innovantes et à vous faire gagner du temps en simplifiant la comptabilité et l'administratif.</p>
                </div>
              </div>
              <div className="right-box">
                <div className="right-box-img">
                  <img src="person-icon.png" alt="" />
                </div>
                <div className="right-box-para">
                  <p>Nous ne négligeons pas l'accompagnement du client car sa satisfaction reste notre priorité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
};



