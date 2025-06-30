import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:3000/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch users", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading users...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-6 py-16">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 text-center text-gray-800">User Directory</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center border border-gray-100"
          >
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={`${user.name.firstname}'s avatar`}
              className="w-24 h-24 rounded-full border-4 border-blue-100 shadow mb-4"
            />

            <h2 className="text-lg font-semibold text-gray-800 capitalize mb-2 text-center">
              {user.name.firstname} {user.name.lastname}
            </h2>

            <div className="w-full text-sm text-gray-700 space-y-2">
              <div className="flex">
                <span className="font-medium w-20">📧 Email</span><span className="w-2">:</span>
                <span className="truncate">{user.email}</span>
              </div>
              <div className="flex">
                <span className="font-medium w-20">📞 Phone</span><span className="w-2">:</span>
                <span>{user.phone}</span>
              </div>
              <div className="flex">
                <span className="font-medium w-20">🏙️ City</span><span className="w-2">:</span>
                <span>{user.address.city}</span>
              </div>
            </div>

            <button
              onClick={() => navigate(`/users/${user.id}`)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg transition"
            >
              View Profile
            </button>
          </div>

        ))}
      </div>
    </div>
  );


}

export default Users;
