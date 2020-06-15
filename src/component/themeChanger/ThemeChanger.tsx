import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

function ThemeChanger() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        style={{
          backgroundColor: theme.btn,
        }}
        onClick={toggleTheme}
      >
        Theme Changer
      </button>
    </div>
  );
}

export default ThemeChanger;
