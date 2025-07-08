import "./SearchInput.css";

const SearchInputView = ({ value = "" }) => {
  return (
    <div className="barra-pesquisa">
      <input
        id="campoPesquisa"
        type="text"
        placeholder="Pesquisar"
        className="barra-pesquisa-input"
        autoComplete="off"
        value={value}
      />
      <button
        id="limparPesquisa"
        className={`limpar-pesquisa${value ? "" : " oculto"}`}
        type="button"
        aria-label="Limpar campo"
      >
        ×
      </button>
      <button className="botao-pesquisar" id="botao-pesquisar">
        <img
          className="icon"
          src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000"
          alt="Ícone lupa"
        />
      </button>
    </div>
  );
};

export default SearchInputView;
