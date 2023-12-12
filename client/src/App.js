import React from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import MyProfile from "./MyProfile";
import VenuesPage from "./VenuesPage";
import BandsPage from "./BandsPage";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<VenuesPage />} />
        <Route exact path="/bands" element={<BandsPage />} />        
        <Route exact path="/login" element={<LoginForm/>} />  
        <Route exact path="/myprofile" element={<MyProfile/>} />
      </Routes>
    </div>
  );
}

export default App;