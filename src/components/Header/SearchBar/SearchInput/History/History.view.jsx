import PropTypes from "prop-types";
import "./History.css";

const HistoryView = ({
  history,
  showSuggestions,
  handleSuggestionsClick,
  value,
}) => {

  return (
    <>
      <ul
        id="sugestoes-pesquisa"
        className={`sugestoes-pesquisa ${showSuggestions ? "" : " oculto"}`}
      >
        {history
          ?.slice()
          ?.reverse()
          ?.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
          ?.map((item, index) => (
            <li
              key={index}
              className="sugestao-item"
              onMouseDown={() => handleSuggestionsClick(item)}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

HistoryView.propTypes = {
  history: PropTypes.array,
  showSuggestions: PropTypes.bool,
  handleSuggestionsClick: PropTypes.func,
  value: PropTypes.string,
};

HistoryView.defaultProps = {
  history: [],
  showSuggestions: false,
  value: "",
};

export default HistoryView;
