import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../stores/themeSlice';
import { RootState } from '../stores';
import { useTheme } from '../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeClasses = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value));
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full p-4 z-50 flex justify-between items-center ${themeClasses.headerBg} ${themeClasses.headerText} ${themeClasses.shadow} ${themeClasses.transition}`}>
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Hipster</h1>
        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-opacity-20 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <nav className={`absolute top-16 left-0 w-full md:relative md:top-auto md:w-auto md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'flex flex-col p-4 space-y-2' : 'hidden'} ${themeClasses.headerBg} ${themeClasses.transition} md:bg-transparent md:bg-opacity-0`}>
        <Link
          to="/"
          onClick={handleLinkClick}
          className={`px-3 py-1 rounded-md ${location.pathname === '/' ? 'bg-opacity-20 bg-white' : ''} hover:bg-opacity-10 hover:bg-white ${themeClasses.transition}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={handleLinkClick}
          className={`px-3 py-1 rounded-md ${location.pathname === '/about' ? 'bg-opacity-20 bg-white' : ''} hover:bg-opacity-10 hover:bg-white ${themeClasses.transition}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={handleLinkClick}
          className={`px-3 py-1 rounded-md ${location.pathname === '/contact' ? 'bg-opacity-20 bg-white' : ''} hover:bg-opacity-10 hover:bg-white ${themeClasses.transition}`}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <label htmlFor="theme-select" className="sr-only">Select Theme</label>
        <select
          id="theme-select"
          value={currentTheme}
          onChange={handleThemeChange}
          className={`p-2 rounded-md ${themeClasses.contentBg} ${themeClasses.textColor} ${themeClasses.fontFamily} ${themeClasses.transition}`}
        >
          <option value="theme1">Minimalist (Default)</option>
          <option value="theme2">Dark Mode</option>
          <option value="theme3">Colorful Cards</option>
        </select>
      </div>
    </header>
  );
};

export default Header;