import HistoryView from "./History.view";

const HistoryComponent = ({ history, showSugestoes, handleSujestionClick, value}) => {
  return (
    <HistoryView
      history={history}
      showSugestoes={showSugestoes}
      handleSujestionClick={handleSujestionClick}
      value={value}
    />
  );
};

export default HistoryComponent;
