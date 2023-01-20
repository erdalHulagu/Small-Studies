import React from 'react'
import HomePage from './pages/home-page'
import Router from './router'
import { StoreProvider } from './store'

const App = () => {
  
  return (
    <StoreProvider>
      <Router/>
    </StoreProvider>
  )
}

export default App