import React from 'react';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="bg-blue-500 text-white text-center p-4">
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p>{user.email}</p>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <img
              src={user.avatar || 'https://via.placeholder.com/150'}
              alt="User Avatar"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p className="text-gray-600">{user.bio}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="mb-2"><strong>Username:</strong> {user.username}</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
            <p className="mb-2"><strong>Name:</strong> {user.name || 'N/A'}</p>
            <p className="mb-2"><strong>Surname:</strong> {user.surname || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


//bebe