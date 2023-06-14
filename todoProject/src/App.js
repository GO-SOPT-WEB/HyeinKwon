import TodoPage from "./pages/TodoPage";
import Error404 from "./pages/Error404";

const BASE_URL = "http://localhost:5500";
const ROUTE_LIST = [{ path: "/", element: TodoPage }];

function App($container) {
  this.$container = $container;
  let currentPage = undefined;

  const init = () => {
    const findMatchedRoute = () =>
      ROUTE_LIST.find((route) => route.path === location.pathname);

    const route = () => {
      currentPage = null;
      const TargetPage = findMatchedRoute()?.element || Error404;
      currentPage = new TargetPage(this.$container);
    };

    route();
  };
  init();
}
export default App;
