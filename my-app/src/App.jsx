import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './features/theme/themeSlice';
import './index.css';


function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-center items-center h-full">
        <div>
          <h1 className="text-3xl font-bold mb-4">Dark Mode / Light Mode</h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleToggleTheme}
          >
            Toggle Mode
          </button>
          <p className="mt-4">
            {darkMode
              ? 'Dark mode is activated. The background is dark and text is white.'
              : 'Light mode is activated. The background is light and text is black.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;