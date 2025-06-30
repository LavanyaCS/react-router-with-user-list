import React from 'react'

function Footer() {
  return (
    <div >
       <footer className="fixed w-full bottom-0 z-50 h-12 bg-blue-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} Megify. All rights reserved.
    </footer>
    </div>
  )
}

export default Footer
