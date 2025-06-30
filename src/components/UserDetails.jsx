import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:3000/users";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/${id}`)
      .then(res => setUser(res.data))
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  if (!user) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-white p-4">
    <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">
      <div className="flex flex-col items-center">
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={`${user.name.firstname}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-blue-100 shadow mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 capitalize mb-1 text-center">
          {user.name.firstname} {user.name.lastname}
        </h1>
        <p className="text-gray-500 text-sm mb-4">@{user.username}</p>
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex"><span className="font-medium w-24">📧 Email</span><span className="w-2">:</span><span>{user.email}</span></div>
        <div className="flex"><span className="font-medium w-24">📞 Phone</span><span className="w-2">:</span><span>{user.phone}</span></div>
        <div className="flex"><span className="font-medium w-24">🏙️ City</span><span className="w-2">:</span><span>{user.address.street} , {user.address.city}</span></div>
        <div className="flex"><span className="font-medium w-24">🏠 Number</span><span className="w-2">:</span><span>{user.address.number}</span></div>
        <div className="flex"><span className="font-medium w-24">📦 Zipcode</span><span className="w-2">:</span><span>{user.address.zipcode}</span></div>
        <div className="pt-2 border-t border-gray-200 text-xs text-gray-500">
          <p><span className="font-semibold">📌 Full Address</span><span className="w-2">:</span> {`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
        </div>
      </div>

      <div className="mt-6 text-right">
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          ← Back to Users
        </button>
      </div>
    </div>
  </div>
);

}

export default UserDetails;
