import styled from "@emotion/styled";
import React from "react";
import { NavbarItem } from "./components/NavbarItem/NavbarItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 5vw;
  min-width: 5vw;
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: space-around;
  box-shadow: 2px 2px 8px black;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
`;


export const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <NavbarItem to="/" icon={"si"}></NavbarItem>
      </NavbarContainer>
    </Container>
  );
};
