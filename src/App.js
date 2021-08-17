import "./styles/Main.css";
import "./styles/MainTable.css";
import "./styles/MainDesktop.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import TobBar from "./layout/TobBar";
import menus from "./Menus";
import BottomMenu from "./component/BottomMenu";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <TobBar menus={menus} />
      <Switch>
        {Routes.map((route, i) => (
          <Route key={i} {...route}>
            <route.component />
          </Route>
        ))}
      </Switch>
    <BottomMenu menus={menus} />
    <Footer menus={menus} />
    </BrowserRouter>
  );
}

export default App;
