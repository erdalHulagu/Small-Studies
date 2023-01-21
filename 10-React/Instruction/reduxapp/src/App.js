import React from 'react'
import { Provider } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode/dark-mode-switcher'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <DarkModeSwitcher/>
        
      </div>
    </Provider>
  )
}

export default App