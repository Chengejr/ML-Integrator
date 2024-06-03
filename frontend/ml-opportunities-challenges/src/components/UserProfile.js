// src/components/UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => {
  // Mock data for demonstration
  user = { name: 'John Doe', email: 'john.doe@example.com', joined: '2023-01-01T12:00:00Z' };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Joined: {new Date(user.joined).toLocaleString()}</p>
    </div>
  );
};

export default UserProfile;
