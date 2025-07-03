import './HeaderSettingsButton.css';

const HeaderSettingsButtonView = () => {
    return (
        <div className="menu-configuracoes">
            <button className="botao-configuracoes">⋮</button>
            <ul className="lista-configuracoes">
                <li><a href="#">Seus dados no YouTube</a></li>
                <li><a href="#">Aparência: Claro</a></li>
                <li><a href="#">Idioma: Português</a></li>
                <li><a href="#">Modo restrito: desativado</a></li>
                <li><a href="#">Local: Brasil</a></li>
                <li><a href="#">Atalhos do teclado</a></li>
                <hr />
                <li><a href="#">Configurações</a></li>
                <li><a href="#">Ajuda</a></li>
                <li><a href="#">Enviar feedback</a></li>
            </ul>
        </div>
    );
};

export default HeaderSettingsButtonView;
