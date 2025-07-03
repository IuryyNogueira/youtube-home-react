const SearchInputView = ({ value, onChange, onClear, onSearch }) => (
  <div className="barra-pesquisa">
    <input
      id="campoPesquisa"
      type="text"
      placeholder="Pesquisar"
      className="barra-pesquisa-input"
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
    <button
      id="limparPesquisa"
      className={`limpar-pesquisa${value ? "" : " oculto"}`}
      type="button"
      aria-label="Limpar campo"
      onClick={onClear}
    >
      ×
    </button>
    <button className="botao-pesquisar" id="botao-pesquisar" onClick={onSearch}>
      <img
        className="icon"
        src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000"
        alt="Ícone lupa"
      />
    </button>
  </div>
);

export default SearchInputView;
