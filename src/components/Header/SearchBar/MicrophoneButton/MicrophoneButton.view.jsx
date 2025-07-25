import PropTypes from "prop-types";
import "./MicrophoneButton.css";

const MicrophoneButtonView = ({ changeStateModal }) => (
  <button className="botao-microfone" onClick={changeStateModal}>
    <img
      className="icon"
      src="https://img.icons8.com/?size=100&id=3422&format=png&color=000000"
      alt="Ícone microfone"
    />
  </button>
);

MicrophoneButtonView.propTypes = {
  changeStateModal: PropTypes.func,
};

MicrophoneButtonView.defaultProps = {
  changeStateModal: () => {},
};

export default MicrophoneButtonView;
