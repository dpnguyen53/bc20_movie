import React from "react";
import { Route } from "react-router-dom";
import NavbarAdmin from "./_components/Navbar";

export default function AdminTemplate({ exact, path, component }) {
  //   const {exact, path, component} = props;
  return (
    <>
      <NavbarAdmin />
      <Route exact={exact} path={path} component={component} />
    </>
  );
}
