import "./History.css";

const HistoryView = ({history = [], showSugestoes}) => {
  return (
    <>
      <ul id="sugestoes-pesquisa" className={`sugestoes-pesquisa ${showSugestoes ? "" : " oculto"}`}>
        {history.slice().reverse().map((item, index) => (
          <li key={index} className="sugestao-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HistoryView;
