import "./App.css";
// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRoutesHome, renderRoutesAdmin } from "./routes";
import AuthPage from "./containers/AdminTemplate/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        {/* Trang home - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* Trang about - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage} /> */}

        {/* Trang list-movie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */}

        <Route path="/auth" component={AuthPage} />

        {/* Trang k tim thay */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
