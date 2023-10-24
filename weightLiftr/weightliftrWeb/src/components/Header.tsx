import headerImage from "../assets/images/banner-home.jpeg";
import "./Header.css";

function Header(props: any) {
  const headerText = props.headerText;
  const accentHeaderText = props.accentText;
  const menuItems = props.menuItems;
  return (
    <>
      <div className="bannerContainer">
      <div className="headerButtonContainer">
        <button id="button1">Button 1</button>
        <button id="button2">Button 2</button>
        <button id="button3">Button 3</button>
      </div>
        <div className="headerTextContainer">
          <span className="headerText">{headerText}</span>
          <span className="accentText">{accentHeaderText}</span>
        </div>
        <div className="imageContainer">
          <img src={headerImage} className="bannerImage" alt="banner image" />
        </div>
        <div className="overlay" />
      </div>
    </>
  );
}

export default Header;
