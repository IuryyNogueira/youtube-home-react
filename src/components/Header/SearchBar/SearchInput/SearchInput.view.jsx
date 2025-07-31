import PropTypes from "prop-types";
import { History } from "./History";
import "./SearchInput.css";

const SearchInputView = ({
  value,
  HandleInput,
  cleanInput,
  handleEnter,
  handleSearch,
  history,
  onSearch,
  offSearch,
  showSuggestions,
  handleSuggestionsClick,
  focous,
}) => {
  return (
    <div className="barra-pesquisa">
      <input
        id="campoPesquisa"
        type="text"
        placeholder="Pesquisar"
        className="barra-pesquisa-input"
        autoComplete="off"
        value={value}
        onChange={HandleInput}
        onKeyDown={handleEnter}
        onFocus={onSearch}
        onBlur={offSearch}
        ref={focous}
      />
      <button
        id="limparPesquisa"
        className={`limpar-pesquisa${value ? "" : " oculto"}`}
        type="button"
        aria-label="Limpar campo"
        onClick={cleanInput}
      >
        ×
      </button>
      <button
        className="botao-pesquisar"
        id="botao-pesquisar"
        onClick={handleSearch}
      >
        <img
          className="icon"
          src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000"
          alt="Ícone lupa"
        />
      </button>

      <History
        history={history}
        showSuggestions={showSuggestions}
        handleSuggestionsClick={handleSuggestionsClick}
        value={value}
      />
    </div>
  );
};

SearchInputView.propTypes = {
  value: PropTypes.string,
  HandleInput: PropTypes.func,
  cleanInput: PropTypes.func,
  handleEnter: PropTypes.func,
  handleSearch: PropTypes.func,
  history: PropTypes.array,
  onSearch: PropTypes.func,
  offSearch: PropTypes.func,
  showSuggestions: PropTypes.bool,
  handleSuggestionsClick: PropTypes.func,
  focous: PropTypes.object,
};

SearchInputView.defaultProps = {
  value: "",
  history: [],
  showSuggestions: false,
};

export default SearchInputView;
