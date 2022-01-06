import HomePage from "../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import { Route } from "react-router-dom";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import HocPage from "../containers/HomeTemplate/HocPage";
import HooksPage from "../containers/HomeTemplate/Hooks";
import Dashboard from "../containers/AdminTemplate/DashboardPage";
import AddUserPage from "../containers/AdminTemplate/AddUserPage";
import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";

const routesHome = [
  //home
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  //about
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  //listmovie
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
];

const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

const renderRoutesAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRoutesHome, renderRoutesAdmin };
