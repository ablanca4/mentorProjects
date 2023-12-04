import { MenuItem } from "../../constants";
import headerImage from "../assets/images/banner-home.jpeg";
import { useLocation } from "react-router-dom";
import "./Header.css";

function Header(props: any) {
  const headerText = props.headerText;
  const accentHeaderText = props.accentText;
  const menuItems = props.menuItems || [];
  const location = useLocation();
  console.log(location);
  return (
    <div id="headerContainerId">
      <div className="overlay"></div>
      <div className="bannerContainer">
        <div className="headerButtonContainer">
          {menuItems.map((item: MenuItem) => (
            <a className="menuButton" id={item.id} href={item.path}>
              {item.title}
            </a>
          ))}
        </div>
        <div className="headerTextContainer">
          <span className="headerText">{headerText}</span>
          <span className="accentText">{accentHeaderText}</span>
        </div>
        <div className="imageContainer">
          <img src={headerImage} className="bannerImage" alt="banner image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
