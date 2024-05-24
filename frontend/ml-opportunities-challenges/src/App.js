import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import UserProfile from './components/UserProfile';
import CommunityForum from './components/CommunityForum';
import EducationalResources from './components/EducationalResources';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">User Profile</a></li>
            <li><a href="/forum">Community Forum</a></li>
            <li><a href="/resources">Educational Resources</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/forum" element={<CommunityForum />} />
        <Route path="/resources" element={<EducationalResources />} />
      </Routes>
    </div>
  );
}

export default App;
