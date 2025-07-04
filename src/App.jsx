import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notfound from './components/Notfound';
import Footer from './components/Footer';

function App() {
 
  return (
    <div className="min-h-screen bg-gray-100">
<header>
      <Navbar /></header>
      <main className=" overflow-y-auto"> {/* Optional padding if navbar is fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<Notfound />} />

        </Routes>
      </main>
      <footer>
      <Footer /></footer>
    </div>
  );
}

export default App;
