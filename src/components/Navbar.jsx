// Navbar.jsx renders the top navigation bar and mobile menu state.


import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {


  // Track whether the mobile menu is expanded on small screens.


  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand logo / title */}

        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
          <img src="/icons/logo.png" alt="Genes Creative logo" className="h-10 w-10 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 object-contain" />
          <span>
            Genes<span className="text-cyan-500"> Creative</span>
          </span>
        </NavLink>

        {/* Desktop navigation links */}


        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-cyan-500' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">


          {/* Dark mode toggle button */}

          <button
            onClick={toggleDarkMode}
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Mobile menu button */}


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-slate-300 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation panel shown only when the menu is open. */}


      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-cyan-500' : 'text-slate-600 dark:text-slate-300'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
