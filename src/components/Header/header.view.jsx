import { ButtonSideBar } from "./ButtonSideBar";
import PropTypes from "prop-types";
import { SearchBar } from "./SearchBar";
import HeaderSettingsButton from "./HeaderSettingsButton";
import { LoginButton } from "./LoginButtonHeader";

import "./Header.css";

const HeaderView = ({ changeSidebar }) => {
  return (
    <header>
      <nav className="barra-topo-fixa">
        <ButtonSideBar changeSidebar={changeSidebar} />

        <img
          className="icon-yt logo-youtube"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="Logo do Youtube"
        ></img>

        <SearchBar />
        <HeaderSettingsButton />
        <LoginButton />
      </nav>
    </header>
  );
};

HeaderView.propTypes = {
  changeSidebar: PropTypes.func,
};

HeaderView.defaultProps = {
  changeSidebar: () => {},
};

export default HeaderView;
