import React from 'react';

const UserProfile = ({ user }) => {

  const { name = 'Unknown User', bio = 'No bio available' } = user || {};
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;
