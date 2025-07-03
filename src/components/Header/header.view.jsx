import {ButtonSideBar} from "./ButtonSideBar";
// import LogoComponent from './LogoComponent';
// import SearchBarComponent from './SearchBarComponent';
// import HeaderSettingsButtonComponent from './HeaderSettingsButtonComponent';

import "./Header.css";

const HeaderView = () => {
  return (
    <header>
      <nav className="barra-topo-fixa">
        <img
          className="icon-yt logo-youtube"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="Logo do Youtube"
        ></img>
        <ButtonSideBar />
        {/* <LogoComponent /> */}
        {/* <SearchBarComponent />
        <HeaderSettingsButtonComponent /> */}
        {/* boão de login faltando decidir shared ou local */}
      </nav>
    </header>
  );
};

export default HeaderView;
