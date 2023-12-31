import React from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from "./NavBar";
import MyProfile from "./MyProfile";
import VenuesPage from "./VenuesPage";
import BandsPage from "./BandsPage";
import Home from "./Home";
import EventsPage from "./EventsPage";
import DetailsVenue from "./DetailsVenue";
import DetailsBand from "./DetailsBand";

function App() {
  return (
    <div className="App">
      
      
      <NavBar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/venues" element={<VenuesPage />} /> 
        <Route path="/venues/:id" element={<DetailsVenue />} />

        <Route exact path="/bands" element={<BandsPage />} />  
        <Route path="/bands/:id" element={<DetailsBand />} /> 

        <Route exact path="/events" element={<EventsPage />} />
        

        <Route exact path="/myprofile" element={<MyProfile/>} />
      </Routes>
    </div>
  );
}

export default App;