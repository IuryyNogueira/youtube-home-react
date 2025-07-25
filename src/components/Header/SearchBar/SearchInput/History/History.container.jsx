import HistoryView from "./History.view";

const HistoryComponent = ({ history, showSuggestions, handleSuggestionsClick, value}) => {
  return (
    <HistoryView
      history={history}
      showSuggestions={showSuggestions}
      handleSuggestionsClick={handleSuggestionsClick}
      value={value}
    />
  );
};

export default HistoryComponent;
