import { NavLink, Outlet } from "react-router";
import "../style/header.css"
import "../style/media-qurey.css"
import { Footer } from "./Footer";
import { useState, useEffect, useRef } from "react";
export const Header = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef(null);
  function handleToggle() {
    setActive(!active);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActive(false); 
      }
    }
    if (active) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [active]);
  return (
    <>
    <section className="contishadow">
      <div className="container ">
        <div className="header">
          <div className="logo-head">
            <div className="log">
              <img src="Group.png" alt="" />
            </div>
            <h1>Comptaway</h1>
          </div>
          <div className="nav" ref={navRef}>
            <ul className={active?"show":"list"}>
              <li> <NavLink to="comptabilite">Comptabilité</NavLink> </li>
              <li> <NavLink to="creermon">Créer mon entreprise</NavLink> </li>
              <li> <NavLink to="notre">Notre appli</NavLink> </li>
              <li> <NavLink to="trafix">Tarifs</NavLink> </li>
            </ul>
          </div>
          <div className="buto">
            <div className="email">
              <img src="email.png" alt="" />
            </div>
            <div className="btn">
              <h4>06 99 10 75 73</h4>
            </div>
            <div className="btn">
              <h4>Prendre rendez-vous</h4>
            </div>
          </div>
          <div className="toggle-men-icon" >
            <div className="meniocn">
              <img src="manicon.png" alt="" />
            </div>
            <div className="toogle-icon">
              <img src="charm_menu-hamburger.png" alt="" onClick={(e) => {
                    e.stopPropagation(); 
                    handleToggle();
                  }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Outlet />
    <Footer/>
    </>
  );
};