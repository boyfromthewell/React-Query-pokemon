import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/pokemon.png";
function Layout() {
  return (
    <>
      <Header>
        <LogoImg src={Logo} />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  background-color: rgba(255, 203, 6, 0.8);
  justify-content: center;
  height: 150px;
  margin-bottom: 5vh;
  padding: 10px 0 10px 0;
`;

const LogoImg = styled.img``;
export default Layout;
