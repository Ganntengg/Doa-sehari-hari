import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home.jsx";
import Semua from "./Routes/Semua/Semua.jsx";
import Detail from "./Routes/Detail/Detail.jsx";
import "./index.css";
import Search from ".//Routes/Search/Search.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/semua" element={<Semua />} />
      <Route path="/doa/:id" element={<Detail />} />
      <Route path="/cari?" element={<Search />} />
    </Routes>
  </Router>
);
