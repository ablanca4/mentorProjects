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
        <div className="overlay" />
      </div>
    </>
  );
}

export default Header;
