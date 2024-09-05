import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <nav>
        <Link to="home">Home</Link> | <Link to="profile">Profile</Link>
      </nav>
      {/* Outlet for rendering nested route components */}
      <Outlet />
    </div>
  );
};

export default UserDashboard;
