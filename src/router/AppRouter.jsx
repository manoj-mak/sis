// AppRouter.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
} from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import StudentDash from "../pages/student-panel/StudentDash";
import CalendarPage from "../pages/common/CalendarPage";
import SettingsPage from "../pages/common/SettingsPage";
import BlogPage from "../pages/common/BlogPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>

        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/studentDash" element={<StudentDash />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
