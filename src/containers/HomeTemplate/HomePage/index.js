import React from "react";
import Button from "@mui/material/Button";
import useStyle from "./../../../styles";

export default function HomePage() {
  const classes = useStyle();
  return (
    <div className={classes.content}>
      <div className="my_navbar">Navbar</div>
      <h3>HomePage</h3>
      <span>Cybersoft</span>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  );
}
