import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import TodoContainer from './component/todos/TodoContainer';
import data from './data/todos.json';
import { ThemeContextProvider, themes } from './context/themeContext';
import ThemeChanger from './component/themeChanger/ThemeChanger';
import { TodosContextProvider } from './context/todosContext';

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar
          menu={[
            { name: 'menu1', link: '/menu1' },
            { name: 'menu2', link: '/menu2' },
          ]}
        />
        <TodosContextProvider>
          <TodoContainer />
        </TodosContextProvider>
        <ThemeChanger></ThemeChanger>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
