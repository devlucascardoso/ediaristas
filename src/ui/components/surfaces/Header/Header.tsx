import React from "react";
import { HeaderAppBar } from "./Header.styles";
import { Toolbar, Container } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}></Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
