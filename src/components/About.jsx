import React from 'react';
function About() {

  return (

 <div className="h-[calc(100vh_-_3rem)] bg-gray-100 flex items-center justify-center p-6">
  <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full text-gray-800">
    <h1 className="text-3xl font-bold mb-4 text-center">About This App</h1>

    <p className="mb-4 text-lg">
      This React app is all about learning how to create multiple pages using <strong>React Router</strong>. It helps you understand how to move between pages, use route parameters, and build a smooth user experience with a clean layout.
    </p>

    <ul className="list-disc list-inside mb-4 text-md">
      <li>A simple Home page to welcome users and guide them</li>
      <li>An About page (this one!) to explain what the app is all about</li>
      <li>A Users page that lists people and links to their profiles</li>
      <li>All styled neatly using Tailwind CSS for responsiveness</li>
    </ul>

    <p className="mb-6 text-md">
      The main goal is to get comfortable with routing and organizing your code into components, so it’s easier to scale as your app grows.
    </p>
  </div>
</div>

  );
}

export default About;
