import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <div className='bg-cover bg-center h-[calc(100vh_-_3rem)] flex flex-col justify-center items-center text-center px-4 bg-image'
    >
      {/* Glassmorphism - major css properties (backdrop-blur-md bg-white/20) */}
      <div className='backdrop-blur-md bg-white/20 p-6 rounded max-w-2xl border border-blue-500/30'>
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Megify</h1>
          <p className="text-white text-lg mb-4">
            This is a simple React application showcasing routing, user listing, and user detail views.
          </p>
          <p className="text-white mb-6">
            Click the buttons below to learn more or browse through the users.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/about')}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition"
            >
              About This App
            </button>
            <button
              onClick={() => navigate('/users')}
              className=" bg-white px-6 py-3 rounded hover:bg-blue-50 transition"
            >
              View Users
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home