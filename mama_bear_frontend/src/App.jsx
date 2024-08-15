import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import CreateChildPage from './pages/CreateChildPage';
import ChildProfilePage from './pages/ChildProfilePage';
import DashboardPage from './pages/DashboardPage';
import GeminiPage from './pages/GeminiPage';
import './App.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/create-child" element={<CreateChildPage />} />
        <Route path="/child-profile" element={<ChildProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/gemini" element={<GeminiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
