import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RedirectPage from "./pages/RedirectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
