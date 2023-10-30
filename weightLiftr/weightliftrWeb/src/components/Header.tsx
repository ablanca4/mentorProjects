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
    <>
      <div className="bannerContainer">
        <div className="headerTextContainer">
          <span className="headerText">{headerText}</span>
          <span className="accentText">{accentHeaderText}</span>
        </div>
        <div className="imageContainer">
          <img src={headerImage} className="bannerImage" alt="banner image" />
        </div>
        <div className="overlay">
          <div className="headerButtonContainer">
            {menuItems.map((item: MenuItem) => (
              <button className="menuButton" id={item.id}>
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
