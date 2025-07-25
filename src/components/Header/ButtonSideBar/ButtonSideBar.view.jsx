import PropTypes from "prop-types";
import "./ButtonSideBar.css";

const ButtonSideBarView = ({ changeSidebar }) => {
  return (
    <button className="botao-barra-lateral" onClick={changeSidebar}>
      <img
        className="icon-lateral"
        src="https://img.icons8.com/?size=100&id=quuyJoZCkYni&format=png&color=000000"
        alt="Menu"
      />
    </button>
  );
};

ButtonSideBarView.propTypes = {
  changeSidebar: PropTypes.func,
};

ButtonSideBarView.defaultProps = {
  changeStateModal: () => {},
};

export default ButtonSideBarView;
