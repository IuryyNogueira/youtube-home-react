import "./VoiceModal.css";

const VoiceModalView = () => (
  <div id="modal-voz" className="modal oculto">
    <div className="conteudo-modal">
      <span id="fechar-modal" className="fechar">
        ✕
      </span>
      <p className="ouvindo">Ouvindo...</p>
      <button className="botao-modal">
        <img src="https://img.icons8.com/?size=100&id=3422&format=png&color=FFFFFF" />
      </button>
    </div>
  </div>
);

export default VoiceModalView; 
