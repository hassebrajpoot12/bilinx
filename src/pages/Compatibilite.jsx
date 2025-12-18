import "../style/media-qurey.css"
import "../style/compatibilites.css"
import { Creer } from "./creermon";
import { Notre } from "./Notre";
import { Trafic } from "./Trafic";
export const Comptabilite = () => {
  return (
   <>
   <section className="herobanner">
    <div className="purple-circle">
      <img src="purple-circle.png" alt="" />
    </div>
    <div className="container hero-container"  >
      <div className="hero">
      <div className="hero-content">
        <div className="heading-contenet">
          <h1 className="rocket-head">
          🚀 Comptaways
        l’expert comptable en lign
        pour indépendants et TPE
          </h1>
          </div>
        <div className="para-content">
          <div className="firs-para">
            <p>Créez votre entreprise gratuitement et démarrez.</p>
          </div>
          <div className="second-para">
            <p>Un comptable spécialisé vous accompagne et vous conseille pour le développement de votre activité. Comptaways est un cabinet (d'expertise-comptable) en ligne inscrit à l'Ordre des Experts-Comptables.</p>
          </div>
          <div className="btn-para">
            <div className="btn-box">
            <button className="fill-btn">Devis comptabilité instantané !</button>
            <button className="withou-fill">Création offerte !</button>
            </div>
            <div className="btn-para-box">
            <p>Appelez-nous au 06 99 10 75 73 ou prenez rendez-vous sans attendre !</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="Group 1248.png" alt="" />
      </div>
      </div>
    </div>
    <div className="green-circle">
      <img src="green-circle.png" alt="" />
    </div>
   </section>
   <Minihero/>
   <Creer/>
   <Notre/>
   <Trafic/>``
   </>
  );
};


export const  Minihero= () => {
  return (
   <>
   <section className="mini-her-sec">
    <div className="blue-circle">
      <img src="blue-circle.png" alt="" />
    </div>
    <div className="yellow-circle">
      <img src="yellow-circle.png" alt="" />
    </div>
    <div className="container mini-hero-conatiner">
      <div className="mini-hero">
        <div className="mini-heading">
          <h1>🤝️‍ Un démarrage en <span>toute sérénité</span></h1>
        </div>
        <div className="mini-boxes">
          <div className="box boxone">
            <h2>1</h2>
              <h1>Connectez vos comptes
               et laissez vous guider</h1>
              <p>
              Notre application se synchronise gratuitement à votre compte bancaire professionnel en toute sécurité. Pilotez votre entreprise grâce à vos indicateurs en temps réel !
              </p>
          </div>
          <div className="box boxtwo">
            <h2>2</h2>
              <h1>
              Nos experts-comptables
            vous conseillent
              </h1>
              <p>
            Nos experts-comptables répondent à vos interrogations. Ils vous conseillent sur l'optimisation de votre activité.
             Votre conseiller comptable dédié s'occupe de vos déclarations (TVA...).
              </p>
          </div>
          <div className="box boxthree">
            <h2>3</h2>
              <h1>
              Obtenez rapidement votre bilan certifié par un de nos expert-comptables
              </h1>
              <p>
         Votre bilan est certifié par un expert-comptable membre de l'ordre.
              </p>
          </div>
        </div>
      </div>
    </div>
   </section>
   </>
  );
};

