import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "../style/trafic.css"
export const Trafic = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
    <section>
      <div className="container nos-container">
        <div className="nos-clients-banner">
          <div className="nos-clients-head">
            <h1>🌟 Les avis de  nos clients</h1>
          </div>
          <div className="nos-client-boxes">
            <div className="nos-left">
              <img src="prev.png" alt="" onClick={goPrev} />
            </div>
        <div className="nos-center">
        <Swiper
        ref={swiperRef}
        // slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={false}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box-nos">
            <h4>Gwenaëlle</h4>
            <p style={{color:"#2AD884"}}>Concessionnaire auto</p>
            <p>Comptaways est un cabinet comptable sachant répondre à chaque attente de son client. Je recommande fortement de faire confiance à CE professionnel.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-nos">
            <h4>Catherine</h4>
            <p style={{color:"#C9B2FF"}}>Avocate</p>
            <p>J'ai confié le suivi comptable de mon entreprise à Comptaways et suis entièrement satisfaite. Les déclarations sont faites sans retard. J'ai une vision grâce à leur tableau de bord de la trésorerie, facturation, charges diverses. C'est clair, précis, efficace et à l'heure. Je recommande vivement. Et en plus ils sont agréables !</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-nos">
            <h4>Rémi</h4>
            <p style={{color:"#FF9067"}}>Chef cuisinier</p>
            <p>Comptaways vous accompagne dans tous les aspects comptables de votre société. La présentation d'outils d'analyse est une aide précieuse pour le pilotage et l'arbitrage d'investissement de votre activité. Forte expertise, je vous le recommande !</p>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="box-nos">
            <h4>Gwenaëlle</h4>
            <p style={{color:"#2AD884"}}>Concessionnaire auto</p>
            <p>Comptaways est un cabinet comptable sachant répondre à chaque attente de son client. Je recommande fortement de faire confiance à CE professionnel.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-nos">
            <h4>Catherine</h4>
            <p style={{color:"#C9B2FF"}}>Avocate</p>
            <p>J'ai confié le suivi comptable de mon entreprise à Comptaways et suis entièrement satisfaite. Les déclarations sont faites sans retard. J'ai une vision grâce à leur tableau de bord de la trésorerie, facturation, charges diverses. C'est clair, précis, efficace et à l'heure. Je recommande vivement. Et en plus ils sont agréables !</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-nos">
            <h4>Rémi</h4>
            <p style={{color:"#FF9067"}}>Chef cuisinier</p>
            <p>Comptaways vous accompagne dans tous les aspects comptables de votre société. La présentation d'outils d'analyse est une aide précieuse pour le pilotage et l'arbitrage d'investissement de votre activité. Forte expertise, je vous le recommande !</p>
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
            <div className="nos-right">
              <img src="next.png" alt="" className="next" onClick={goNext}></img>
            </div>

          </div>

        </div>
        
      </div>
    </section>
    <Compnaylogo/>
    </>
  );
};

export const Compnaylogo = () => {
  return (
    <>
    <section>
      <div className="container company-con">
        <div className="company-heo-baner">
          <div className="company-hero-head">
            <h1>👉 Nos <span>banques</span> partenaires</h1>
            <p>Notre application se connecte à toutes les banques les plus courantes.
             Vos flux bancaires remontent automatiquement sur notre application.</p>
          </div>
          <div className="company-logo">
            <div className="log-icon"><img src="imag.png" alt="" /></div>
            <div className="log-icon"><img src="imag-2.png" alt="" /></div>
            <div className="log-icon"><img src="Frame 1349.png" alt="" /></div>
            <div className="log-icon"><img src="Frame 1350.png" alt="" /></div>
            <div className="log-icon"><img src="Frame 1351.png" alt="" /></div>
            <div className="log-icon"><img src="Frame 1352.png" alt="" /></div>
            <div className="log-icon"><img src="Frame 1353.png" alt="" /></div>
            <div className="log-icon"><img src="Frame 1354.png" alt="" /></div>
            <div className="log-icon"><img src="image 1.png" alt="" /></div>
            <div className="log-icon" style={{fontSize:"1.6rem", padding:"4rem", color:"#2AD884"}}>Et plus encore ...</div>


          </div>
        </div>

      </div>
    </section>
    </>
  );
};

