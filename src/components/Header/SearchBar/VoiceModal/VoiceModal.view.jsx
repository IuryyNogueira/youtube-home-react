import PropTypes from "prop-types";
import "./VoiceModal.css";

const VoiceModalView = ({ modalView, changeStateModal }) => (
  <div id="modal-voz" className={`modal ${modalView ? "oculto" : ""}`}>
    <div className={"conteudo-modal"}>
      <span id="fechar-modal" className="fechar" onClick={changeStateModal}>
        ✕
      </span>
      <p className="ouvindo">Ouvindo...</p>
      <button className="botao-modal">
        <img src="https://img.icons8.com/?size=100&id=3422&format=png&color=FFFFFF" />
      </button>
    </div>
  </div>
);

VoiceModalView.propTypes = {
  modalView: PropTypes.bool,
  changeStateModal: PropTypes.func,
};

VoiceModalView.defaultProps = {
  modalView: false,
  changeStateModal: () => {},
};

export default VoiceModalView;
