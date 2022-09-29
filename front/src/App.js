import React, { useEffect } from "react";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TrailerPage from "./pages/TrailerPage";
import Layout from "./Layout";
import Content from "./components/Content";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  // const user = useSelector(selectUser);
  const user = null;
  const dispatch = useDispatch();
  return (
    <div className="App ">
      <Routes>
        <Route
          path="/login"
          element={
            user ? <Navigate to="/home" replace /> : <LoginPage type="Login" />
          }
        />
        <Route path="/" element={<LandingPage />}></Route>
        <Route element={<Layout />}>
          <Route path="/home" element={<Content />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/watch/movie/:id" element={<TrailerPage />}></Route>
          <Route path="/watch/tv/:id" element={<TrailerPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
