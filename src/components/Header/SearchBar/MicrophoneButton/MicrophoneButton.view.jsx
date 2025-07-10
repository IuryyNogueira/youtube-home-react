
import "./MicrophoneButton.css"

const MicrophoneButtonView = ({changeStateModal}) => (
  <button className="botao-microfone" onClick={changeStateModal}>
    <img
      className="icon"
      src="https://img.icons8.com/?size=100&id=3422&format=png&color=000000"
      alt="Ícone microfone"
    />
  </button>
);

export default MicrophoneButtonView;
