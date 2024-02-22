import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import AuthLayout from "../components/layout/AuthLayout";

import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import TestPage from "../pages/TestPage";

import LoginPage from "../pages/non-auth/LoginPage";
import SignupPage from "../pages/non-auth/SignupPage";

import UserProfile from "../pages/auth/UserProfilePage";
import NotFound from "../pages/default-set/NotFound";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/testPage" element={<TestPage />} />
        </Route>

        <Route element={<NonAuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/user/:userId" element={<UserProfile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
