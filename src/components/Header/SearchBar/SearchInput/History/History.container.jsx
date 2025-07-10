import HistoryView from "./History.view";

const HistoryComponent = ({history, showSugestoes}) => {
    return(
        <HistoryView history={history} showSugestoes={showSugestoes}/>
    );
};

export default HistoryComponent;