import { MenuItemsArray } from "../../../constants";
import Header from "../../components/Header";
type props = { children: React.ReactElement };
function LayoutPage({ children }: props) {
  return (
    <div>
      <Header
        headerText={"WEIGHT"}
        accentText={"LIFTR"}
        menuItems={MenuItemsArray}
      />

      <main>{children}</main>

      <footer>{/* Footer content */}</footer>
    </div>
  );
}

export default LayoutPage;
