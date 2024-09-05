// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My Application</h1>
        {/* Add navigation here if needed */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
