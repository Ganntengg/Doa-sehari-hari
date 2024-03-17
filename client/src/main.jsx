import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Semua from "./Semua/Semua.jsx";
import Detail from "./Detail/Detail.jsx";
import "./index.css";
import Search from "./Search/Search.jsx";

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
