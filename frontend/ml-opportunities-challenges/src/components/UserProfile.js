import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          {/* Add other user details here */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
