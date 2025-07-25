import "./categoryButton.css";

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

export default CategoryButtonView;
