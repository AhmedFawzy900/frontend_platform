import "./App.css";
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import Dashboard from "./Pages/dashboard/Dashboard";
import Homepage from "./Pages/homepage/Homepage";
import MyLearning from "./Pages/mylearning/MyLearning";
import Teachers from "./Pages/teachers/Teachers";
import Courses from "./Pages/courses/Courses";
import Profile from "./Pages/profile/Profile";
function App() {
  return (
    <div className="App">
        <Routes>
          {/* ****** auth routes ****** */}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* ***** dashboard routes  ***** */}
          <Route path='/dashboard' element={<Dashboard />}></Route>

          {/* ***** user preview routes ***** */}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/mylearning" element={<MyLearning />}></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/cources" element={<Courses />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </div>
  );
}

export default App;
