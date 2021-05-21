import { useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeContextProvider({ children }) {
  const [settings, setSettings] = useState({
    theme: 'light',
  });

  const contextInitValue = {
    settings,
    changeSettings: (settings) => setSettings(settings),
    toggleTheme: () =>
      setSettings((setting) => ({
        ...setting,
        theme: setting.theme === 'light' ? 'dark' : 'light',
      })),
  };

  return (
    <ThemeContext.Provider value={contextInitValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
