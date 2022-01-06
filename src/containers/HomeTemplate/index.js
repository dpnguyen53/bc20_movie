import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./_components/Navabar";

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <NavbarHome />
      <Route exact={exact} path={path} component={component} />
    </>
  );
}
