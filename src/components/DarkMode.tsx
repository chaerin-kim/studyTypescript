import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeProvider'; // Context import

const DarkMode = () => {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <label className="inline-flex items-center cursor-pointer me-5">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={toggleDarkMode}  
      />
      <div
        className={`relative w-11 h-6 rounded-full transition-all bg-gray-200 peer-checked:bg-orange-500 ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-400'
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            isDarkMode ? 'translate-x-full' : ''
          }`}
        ></div>
      </div>
      <span className={`text-sm font-medium ms-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-950'}`}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </label>
  );
};

export default DarkMode;
