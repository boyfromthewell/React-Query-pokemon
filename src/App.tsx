import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
