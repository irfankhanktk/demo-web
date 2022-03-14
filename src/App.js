import React, {useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RowCol from "./components/RowColumnDemo";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home";
import About from "./components/About";
import FormDemo from "./components/FormDemo";
import Login from "./components/auth/Login";
import useToken from "./components/customHooks/useToken";
 
export default function App() {
  const { token, setToken } = useToken('abc');

  if (token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <Routes path="/">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}