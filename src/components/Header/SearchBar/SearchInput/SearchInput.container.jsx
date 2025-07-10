import { useState, useEffect } from "react";
import SearchInputView from "./SearchInput.view";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const HandleInput = (e) => setValue(e.target.value);
  const cleanInput = () => setValue("");

  //history

  const getHistorico = () => {
    return JSON.parse(localStorage.getItem("historicoPesquisa")) || [];
  };

  const [history, setHistory] = useState(getHistorico);
  const [showSugestoes, setShowSugestoes] = useState(false);

  const onSearch = () => { 
    if (history) setShowSugestoes(true);
    };
  const offSearch = () => setShowSugestoes(false);



  const handleSujestionClick = (item) => {
    setValue(item);
    setShowSugestoes(false);
  }


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
      setValue("");
    }
  };

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
      showSugestoes={showSugestoes}
      handleSujestionClick={handleSujestionClick}
    />
  );
};

export default SearchInput;
