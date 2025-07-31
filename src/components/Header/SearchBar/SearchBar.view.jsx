import { SearchInput } from "./SearchInput";
import { MicrophoneButton } from "./MicrophoneButton";
import { ModalVoz } from "./VoiceModal";

import "./SearchBar.css";

const SearchBarView = ({changeStateModal, modalView, transcript}) => {
  return (
    <>
      <div className="barra-pesquisa-container">
        <SearchInput transcript={transcript}/>
        <MicrophoneButton changeStateModal={changeStateModal}/>
      </div>
      <ModalVoz modalView={modalView} changeStateModal={changeStateModal}/>
    </>
  );
};

export default SearchBarView;
