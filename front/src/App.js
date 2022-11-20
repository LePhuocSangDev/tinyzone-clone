import React, { useEffect } from "react";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TrailerPage from "./pages/TrailerPage";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const { userInfo } = useSelector(selectUser);
  return (
    <div className="App ">
      <Routes>
        <Route
          path="/login"
          element={
            userInfo ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginPage type="Login" />
            )
          }
        />
        <Route
          path="/register"
          element={
            userInfo ? (
              <Navigate to="/home" replace />
            ) : (
              <RegisterPage type="Login" />
            )
          }
        ></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/watch/movie/:id" element={<TrailerPage />}></Route>
          <Route path="/watch/tv/:id" element={<TrailerPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
