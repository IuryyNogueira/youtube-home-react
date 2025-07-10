import { useState } from "react";
import SearchBarView from "./SearchBar.view";

const SearchBarContainer = () => {

    const [modalView, setModalView] = useState(true);

    const changeStateModal = () => setModalView(!modalView);

    return (
        <SearchBarView 
        changeStateModal={changeStateModal}
        modalView={modalView}
        />
        
    );

};

export default SearchBarContainer;