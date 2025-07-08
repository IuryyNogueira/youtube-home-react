import { SearchInput } from "./SearchInput";
import { MicrophoneButton } from "./MicrophoneButton";
import { ModalVoz } from "./VoiceModal";

import "./SearchBar.css";

const SearchBarView = () => {
  return (
    <>
      <div className="barra-pesquisa-container">
        <SearchInput />
        <MicrophoneButton />
      </div>
      <ModalVoz />
    </>
  );
};

export default SearchBarView;
