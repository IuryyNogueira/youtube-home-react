import { useState, useEffect } from "react";
import SearchBarView from "./SearchBar.view";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SearchBarContainer = () => {
  const [modalView, setModalView] = useState(true);
  const [wasListening, setWasListening] = useState(false);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const changeStateModal = () => {
    setModalView(!modalView);
  };

  useEffect(() => {
    if (!modalView) {
      SpeechRecognition.startListening({ language: "pt-BR" });
      setWasListening(true);
    } else {
      SpeechRecognition.stopListening();
      resetTranscript();
    }

    return () => {
      SpeechRecognition.stopListening();
    };
  }, [modalView]);

  useEffect(() => {
    if (wasListening && !modalView && !listening) {
      console.log("Reconhecimento de voz terminou");
      setModalView(true);
      resetTranscript();
      setWasListening(false);
    }
  }, [listening, modalView, wasListening]);

  return (
    <SearchBarView
      changeStateModal={changeStateModal}
      modalView={modalView}
      transcript={transcript}
    />
  );
};

export default SearchBarContainer;
