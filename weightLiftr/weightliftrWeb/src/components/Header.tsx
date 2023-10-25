import headerImage from "../assets/images/banner-home.jpeg";
import "./Header.css";

function Header(props: any) {
  const headerText = props.headerText;
  const accentHeaderText = props.accentText;
  const menuItems = props.menuItems;
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
            <button className="menuButton" id="home">
              {menuItems[0]}
            </button>
            <button className="menuButton" id="about">
              {menuItems[1]}
            </button>
            <button className="menuButton" id="contact">
              {menuItems[2]}
            </button>
            <button className="menuButton" id="login">
              {menuItems[3]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
