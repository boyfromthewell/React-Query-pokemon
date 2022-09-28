import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";

import Home from "./pages/Home";
import PokeDetail from "./pages/PokeDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<PokeDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
