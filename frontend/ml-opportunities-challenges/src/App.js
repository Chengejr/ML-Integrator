// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import UserProfile from './components/UserProfile';
import CommunityForum from './components/CommunityForum';
import EducationalResources from './components/EducationalResources';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/forum" element={<CommunityForum />} />
          <Route path="/resources" element={<EducationalResources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

