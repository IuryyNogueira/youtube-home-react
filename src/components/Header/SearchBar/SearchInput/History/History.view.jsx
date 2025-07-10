import "./History.css";

const HistoryView = ({
  history = [],
  showSugestoes,
  handleSujestionClick,
  value,
}) => {
  return (
    <>
      <ul
        id="sugestoes-pesquisa"
        className={`sugestoes-pesquisa ${showSugestoes ? "" : " oculto"}`}
      >
        {history
          .slice()
          .reverse()
          .filter((item) => !value || item.toLowerCase().includes(value))
          .map((item, index) => (
            <li
              key={index}
              className="sugestao-item"
              onMouseDown={() =>handleSujestionClick(item)}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

export default HistoryView;
