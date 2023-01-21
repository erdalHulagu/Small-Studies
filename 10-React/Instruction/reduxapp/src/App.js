import React from 'react'
import { Provider, useSelector } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode/dark-mode-switcher'
import LangSwitcher from './components/lang-switcher/lang-switcher'
import store from './store'
import "./App.css";

const App = () => {

  const darkMode = useSelector(state=>state.theme.darkMode);

  return (
      <div className={darkMode ? "dark" : ""}>
        <DarkModeSwitcher/>
        <LangSwitcher/>
      </div>
  )
}

export default App