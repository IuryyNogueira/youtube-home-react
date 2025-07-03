import "./LoginButton.css";

const LoginButtonView = () => {
  return (
    <div className="login-container">
      <p className="texto-login">
        Faça login para curtir vídeos, comentar e se inscrever.
      </p>
      <a href="#" className="botao-fazer-login-lateral">
        <img
          className="icon-login"
          src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=065fd4"
          alt="ícone de login"
        />
        <span>Fazer login</span>
      </a>
    </div>
  );
};

export default LoginButtonView;
