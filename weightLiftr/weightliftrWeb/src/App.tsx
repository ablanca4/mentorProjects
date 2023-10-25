import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        headerText={"WEIGHT"}
        accentText={"LIFTR"}
        menuItems={["HOME", "CONTACT", "ABOUT", "LOGIN/SIGNUP"]}
      />
    </>
  );
}

export default App;
