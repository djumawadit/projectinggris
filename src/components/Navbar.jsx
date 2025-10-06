import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-lg border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide"
        >
          Aninditya
        </a>

        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#certificates" className="hover:text-blue-400 transition">Certificates</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-blue-700 flex flex-col px-6 py-4 space-y-4 text-gray-300">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-400">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Skills</a>
          <a href="#certificates" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Certificates</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
