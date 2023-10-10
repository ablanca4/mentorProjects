import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        headerText={"WEIGHT"}
        accentText={"LIFTR"}
        menuItems={["Home", "Contact", "About"]}
      />
    </>
  );
}

export default App;
