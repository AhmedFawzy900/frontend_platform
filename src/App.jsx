import "./App.css";
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import Dashboard from "./Pages/dashboard/Dashboard";
import Homepage from "./Pages/homepage/Homepage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* ****** auth routes ****** */}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* ***** dashboard routes  ***** */}
          <Route path='/dashboard' element={<Dashboard />}></Route>

          {/* ***** user preview routes ***** */}
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
