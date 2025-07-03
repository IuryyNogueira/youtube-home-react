import React from "react";
import "./ScrollHorizontal.css";

const categorias = [
  "Tudo",
  "Cálculo",
  "Samba",
  "Musica",
  "Filmes",
  "Animação",
  "Jogos",
  "Notícias",
  "Esportes",
  "Cursos",
  "Podcasts",
  "Explorar",
  "Mais do Youtube",
  "Notícias",
  "Esportes",
  "Cursos",
  "Podcasts",
  "Explorar",
  "Mais do Youtube",
  "Notícias",
];

const ScrollHorizontalView = () => {
  return (
    <div
      className="scroll-horizontal-categorias"
      id="scroll-horizontal-categorias"
    >
      <img
        id="arrow-left"
        className="arrow-1"
        src="https://img.icons8.com/?size=100&id=UsUmqAyZPsEC&format=png&color=000000"
        alt="seta esquerda"
      />
      <div id="categorias" className="categorias">
        {categorias.map((cat, idx) => (
          <button
            key={idx}
            className={`botao-categorias${idx === 0 ? " selecionado" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <img
        id="arrow-right"
        className="arrow-2"
        src="https://img.icons8.com/?size=100&id=AgsBKswRnV1i&format=png&color=000000"
        alt="seta direita"
      />
    </div>
  );
};

export default ScrollHorizontalView;
