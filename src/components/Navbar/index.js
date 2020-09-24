import React from "react";

import { Container } from "../common";
import { Nav, Brand } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Brand>Houz.</Brand>
      </Container>
    </Nav>
  );
};

export default Navbar;
