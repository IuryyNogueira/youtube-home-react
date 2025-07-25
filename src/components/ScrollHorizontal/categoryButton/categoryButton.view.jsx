import "./categoryButton.css";
import PropTypes from "prop-types";

const CategoryButtonView = ({ category, select, setCategorySelect }) => {
  return (
    <button
      className={`botao-categorias${select ? " selecionado" : ""}`}
      onClick={setCategorySelect}
    >
      {category}
    </button>
  );
};

CategoryButtonView.propTypes = {
  category: PropTypes.string,
  select: PropTypes.bool,
  setCategorySelect: PropTypes.func,
};

CategoryButtonView.defaultProps = {
  category: "",
  select: false,
};

export default CategoryButtonView;
