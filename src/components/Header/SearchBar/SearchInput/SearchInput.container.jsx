import { useState, useEffect } from "react";
import SearchInputView from "./SearchInput.view";

const SearchInput = ({ transcript }) => {
  const [value, setValue] = useState("");

  const HandleInput = (e) => setValue(e.target.value);
  const cleanInput = () => setValue("");

  //history

  const getHistorico = () => {
    return JSON.parse(localStorage.getItem("historicoPesquisa")) || [];
  };

  const [history, setHistory] = useState(getHistorico);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onSearch = () => {
    if (history) setShowSuggestions(true);
  };
  const offSearch = () => setShowSuggestions(false);

  const handleSuggestionsClick = (item) => {
    setValue(item);
    setShowSuggestions(false);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (value) {
      console.log("Buscar por:", value);

      const newSearch = value.trim();
      const newHistory = [...history, newSearch];
      setHistory(newHistory);
    }
  };

  useEffect(() => {
    if (transcript && transcript !== value) {
      setValue(transcript);
    }
  }, [transcript]);

  return (
    <SearchInputView
      value={value}
      HandleInput={HandleInput}
      cleanInput={cleanInput}
      handleEnter={handleEnter}
      handleSearch={handleSearch}
      history={history}
      offSearch={offSearch}
      onSearch={onSearch}
      showSuggestions={showSuggestions}
      handleSujestionClick={handleSuggestionsClick}
    />
  );
};

export default SearchInput;
