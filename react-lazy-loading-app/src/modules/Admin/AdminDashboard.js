import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminSettings from "./AdminSettings";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <Link to="home">Home</Link> | <Link to="settings">Settings</Link>
      </nav>
      {/* The Outlet renders the child route components */}
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
