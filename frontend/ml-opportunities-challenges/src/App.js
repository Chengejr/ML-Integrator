import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import EducationalResources from './components/EducationalResources';
import CommunityForum from './components/CommunityForum';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resources" element={<EducationalResources />} />
        <Route path="/forum" element={<CommunityForum />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
