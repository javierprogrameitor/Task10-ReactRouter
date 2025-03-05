// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className="flex justify-start ml-10 mt-2">
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-2 text-amber-100 cursor-pointer"
      onClick={() => window.location.href = 'https://javyprogrameitor.github.io/Portfolio/'} >
      Portfolio
    </button>
    </div>
    <nav className="bg-gradient-to-r from-yellow-300 to-purple-500 shadow-2xl p-4 text-xl text-black font-bold flex justify-around m-4 rounded-lg">
      <Link to="/" className="hover:underline">Start</Link>
      <Link to="/list" className="hover:underline">List of recipients</Link>
      <Link to="/add" className="hover:underline">Add gift</Link>
    </nav>
    </>
  );
}



