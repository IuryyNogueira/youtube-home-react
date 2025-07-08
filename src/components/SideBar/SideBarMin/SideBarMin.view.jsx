
import React from "react";
import "./SideBarMin.css";


const SideBarMinView = () => {
      return (
        <>
      {/* Barra Lateral Reduzida */}
      <nav className="barra-lateral-reduzida" id="barra-lateral-reduzida">
        <ul>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000" alt="Início" /><span>Início</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=bqOL9fT7XSdo&format=png&color=000000" alt="Shorts" /><span>Shorts</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=2L0CwKPmkE4S&format=png&color=000000" alt="Inscrições" /><span>Inscrições</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="Você" /><span>Você</span></a></li>
          <li><a href="#"><img className="icon" src="https://img.icons8.com/?size=100&id=mDMf4QY53cql&format=png&color=000000" alt="Histórico" /><span>Histórico</span></a></li>
        </ul>
      </nav>
      </>
  );
  };


export default SideBarMinView;
