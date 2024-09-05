import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load modules
const AdminDashboard = React.lazy(() =>
  import("./modules/Admin/AdminDashboard")
);
const AdminHome = React.lazy(() => import("./modules/Admin/AdminHome"));
const AdminSettings = React.lazy(() => import("./modules/Admin/AdminSettings"));

const UserDashboard = React.lazy(() => import("./modules/User/UserDashboard"));
const UserHome = React.lazy(() => import("./modules/User/UserHome"));
const UserProfile = React.lazy(() => import("./modules/User/UserProfile"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="admin"
            element={
              <Suspense fallback={<div>Loading Admin Module...</div>}>
                <AdminDashboard />
              </Suspense>
            }
          >
            <Route
              path="home"
              element={
                <Suspense fallback={<div>Loading Home...</div>}>
                  <AdminHome />
                </Suspense>
              }
            />
            <Route
              path="settings"
              element={
                <Suspense fallback={<div>Loading Settings...</div>}>
                  <AdminSettings />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="user"
            element={
              <Suspense fallback={<div>Loading User Module...</div>}>
                <UserDashboard />
              </Suspense>
            }
          >
            {/* Nested routes under User */}
            <Route
              path="home"
              element={
                <Suspense fallback={<div>Loading Home...</div>}>
                  <UserHome />
                </Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <Suspense fallback={<div>Loading Profile...</div>}>
                  <UserProfile />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
