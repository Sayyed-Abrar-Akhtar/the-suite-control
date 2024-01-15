/* eslint-disable react/prop-types */
import { createContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const osDarkModeState = window.matchMedia(
    '(prefers-color-scheme: dark'
  ).matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    osDarkModeState,
    'isDarkMode'
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
