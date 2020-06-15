import React, { createContext, useState } from 'react';
import { ThemeContextInterface } from '../interfaces/themeInterface';

export const themes = {
  light: {
    syntax: '#555',
    ui: '#ddd',
    bg: '#eee',
    btn: '#1E90FF',
  },
  dark: { syntax: '#555', ui: '#ddd', bg: '#eee', btn: '#46A049' },
};

const MyContext: ThemeContextInterface = {
  theme: themes.light,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(MyContext);

export function ThemeContextProvider(props: any) {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
