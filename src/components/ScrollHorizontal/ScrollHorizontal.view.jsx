import "./ScrollHorizontal.css";
import CategoryButton from "./categoryButton";
import PropTypes from "prop-types";

const ScrollHorizontalView = ({
  categorys,
  categorySelect,
  setCategorySelect,
  scrollLeft,
  scrollRight,
  categorysScrollRef,
  sideBarState,
  showRightArrow,
  showLefttArrow,
}) => {
  return (
    <div
      className={`scroll-horizontal-categorias ${
        sideBarState ? "expanded" : "reduced"
      }`}
      id="scroll-horizontal-categorias"
    >
      {showLefttArrow && (
        <img
          onClick={scrollLeft}
          id="arrow-left"
          className="arrow-1"
          src="https://img.icons8.com/?size=100&id=UsUmqAyZPsEC&format=png&color=000000"
        />
      )}
      <div ref={categorysScrollRef} id="categorias" className="categorias">
        {categorys.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            select={category === categorySelect}
            setCategorySelect={() => setCategorySelect(category)}
          />
        ))}
      </div>
      {showRightArrow && (
        <img
          onClick={scrollRight}
          id="arrow-right"
          className="arrow-2"
          src="https://img.icons8.com/?size=100&id=AgsBKswRnV1i&format=png&color=000000"
        />
      )}
    </div>
  );
};

ScrollHorizontalView.propTypes = {
  categorys: PropTypes.array,
  categorySelect: PropTypes.string,
  setCategorySelect: PropTypes.func,
  scrollLeft: PropTypes.func,
  scrollRight: PropTypes.func,
  categorysScrollRef: PropTypes.object,
  sideBarState: PropTypes.bool,
  showRightArrow: PropTypes.bool,
  showLefttArrow: PropTypes.bool,
};

ScrollHorizontalView.defaultProps = {
  categorys: [],
  categorySelect: "",
  sideBarState: false,
  showRightArrow: false,
  showLefttArrow: false,
};

export default ScrollHorizontalView;
