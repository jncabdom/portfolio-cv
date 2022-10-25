import styled from "@emotion/styled";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ItemProps {
  icon: any
  to: string
  handler?: () => void
}

interface ButtonProps {
  to: string
  color: string
}

const Button = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 30px;
  height: 30px;
  color: ${(props: ButtonProps) => props.color};
  * {
    font-size: 50px;
  }
`;

export const NavbarItem: FC<ItemProps> = ({ icon, to, handler }) => {
  return (
    <Button as={Link} to={to} color="black" onClick={handler}>
      {icon}
    </Button>
  );
};
