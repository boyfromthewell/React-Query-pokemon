import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <header style={{ background: "yellow" }}>POKEMON!</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
