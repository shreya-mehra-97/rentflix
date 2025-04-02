import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthProvider } from "./components/Auth";
import Navbar from "./components/Navbar/Navbar";

const Login = lazy(() => import("./components/Login/Login"));
const NewPost = lazy(() => import("./components/NewPost/NewPost"));
const Logout = lazy(() => import("./components/Logout"));
const Buy = lazy(() => import("./components/Buy/Buy"));
const Home = lazy(() => import("./components/Home/Home"));
const Account = lazy(() => import("./components/Account/Account"));
const Profile = lazy(() => import("./components/Account/Profile"));
const Post = lazy(() => import("./components/NewPost/Post"));
// const Chatbot = lazy(() => import('./components/Chatbot/Chatbot'))

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <div
            className="container"
            style={{
              paddingBottom: "90px",
            }}
          >
            <Suspense fallback={<>Loading</>}>
              <Routes>
                {/* Regular public route */}
                <Route path="/home" element={<Home />} />

                {/* Public routes with restrictions */}
                <Route
                  path="/login"
                  element={
                    <PublicRoute restricted={true}>
                      <Login />
                    </PublicRoute>
                  }
                />

                {/* Protected routes */}
                <Route
                  path="/newpost"
                  element={
                    <PrivateRoute>
                      <NewPost />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/logout"
                  element={
                    <PrivateRoute>
                      <Logout />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/rent-now"
                  element={
                    <PrivateRoute>
                      <Buy />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/account"
                  element={
                    <PrivateRoute>
                      <Account />
                    </PrivateRoute>
                  }
                />

                {/* Public profile routes */}
                <Route
                  path="/profile/:username"
                  element={
                    <PublicRoute>
                      <Profile />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/post/:post_id"
                  element={
                    <PublicRoute>
                      <Post />
                    </PublicRoute>
                  }
                />

                {/* Catch-all redirect */}
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
