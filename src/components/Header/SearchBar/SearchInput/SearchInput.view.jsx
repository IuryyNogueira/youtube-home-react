import { History } from "./History";
import "./SearchInput.css";

const SearchInputView = ({
  value = "",
  HandleInput,
  cleanInput,
  handleEnter,
  handleSearch,
  history,
  onSearch,
  offSearch,
  showSugestoes,

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

      <History history={history} showSugestoes={showSugestoes}/>
    </div>
  );
};

export default SearchInputView;
