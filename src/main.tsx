import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import Navbar from "./components/Navbar.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import CreatePost from "./pages/CreatePost.tsx";
import Login from "./pages/Login.tsx";
import { PrivateRoute } from "./pages/PrivateRoute.tsx";
import { SinglePostPage } from "./components/SinglePostPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route
            path="/createpost"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route path="/login/avemariamiamor" element={<Login />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
