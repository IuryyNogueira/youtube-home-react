import { useState, useRef, useEffect } from "react";
import ScrollHorizontalView from "./ScrollHorizontal.view";

const ScrollHorizontal = ({
  sideBarState,
  categorySelect,
  setCategorySelect,
}) => {
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLefttArrow, setShowLefttArrow] = useState(false);
  const categorysScrollRef = useRef(null);

  const arrowState = () => {
    const scrollState = categorysScrollRef.current;

    setShowLefttArrow(scrollState.scrollLeft > 0);
    setShowRightArrow(
      scrollState.scrollLeft + scrollState.clientWidth < scrollState.scrollWidth
    );
  };

  useEffect(() => {
    arrowState();
    const scroll = categorysScrollRef.current;
    scroll.addEventListener("scroll", arrowState);
  }, []);

  const scrollLeft = () => {
    categorysScrollRef.current.scrollLeft -= 250;
  };

  const scrollRight = () => {
    categorysScrollRef.current.scrollLeft += 250;
  };

  const categorys = [
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
    "aaaaa",
    "bbbbb",
    "ccccc",
    "dddddd",
    "eeeeeee",
    "fffffff",
    "ggggggg",
  ];

  return (
    <ScrollHorizontalView
      categorySelect={categorySelect}
      categorys={categorys}
      setCategorySelect={setCategorySelect}
      scrollRight={scrollRight}
      scrollLeft={scrollLeft}
      categorysScrollRef={categorysScrollRef}
      sideBarState={sideBarState}
      showLefttArrow={showLefttArrow}
      showRightArrow={showRightArrow}
    />
  );
};

export default ScrollHorizontal;
