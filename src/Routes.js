import Home from "./views/Home"
import Privacy from "./views/Privacy"
import Terms from "./views/Terms"
import About from "./views/About"
import Error from "./views/Error"

const Routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/privacy",
    component: Privacy,
    exact: true,
  },
  {
    path: "/terms",
    component: Terms,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "*",
    component: Error,
    exact: true,
  },
];

export default Routes;
