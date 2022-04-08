import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useContext} from 'react';
import { useEffect, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext({
  theme: themes.light,
  setTheme : () => {}
});

function App() {
  const [theme, setTheme] = useState(themes.light);
  const value = {theme, setTheme};
  return (
    <ThemeContext.Provider value={value}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme==themes.light?themes.dark:themes.light)} style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
