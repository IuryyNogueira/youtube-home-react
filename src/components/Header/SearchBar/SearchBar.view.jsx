import "./Search.css";

const SearchBarView = () => {
  return (
    <div className="barra-pesquisa-container">
      <SearchInput />
      <MicrophoneButton />
      <VoiceModal />
    </div>
  );
};

export default SearchBarView;
