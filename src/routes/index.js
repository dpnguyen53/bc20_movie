import { lazy } from "react";
import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";

const routesHome = [
  //home
  {
    exact: true,
    path: "/",
    component: lazy(() => import("containers/HomeTemplate/HomePage")),
  },
  //about
  {
    exact: false,
    path: "/about",
    component: lazy(() => import("containers/HomeTemplate/AboutPage")),
  },
  //listmovie
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("containers/HomeTemplate/ListMoviePage")),
  },
  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("containers/HomeTemplate/DetailMoviePage")),
  },
  {
    exact: false,
    path: "/hoc",
    component: lazy(() => import("containers/HomeTemplate/HocPage")),
  },
  {
    exact: false,
    path: "/hooks",
    component: lazy(() => import("containers/HomeTemplate/Hooks")),
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("containers/AdminTemplate/DashboardPage")),
  },
  {
    exact: false,
    path: "/add-user",
    component: lazy(() => import("containers/AdminTemplate/AddUserPage")),
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
