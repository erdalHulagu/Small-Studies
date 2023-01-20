import React from 'react'
import AppRouter from './router'
import { StoreProvider } from './store'


const App = () => {
  
  return (
    <StoreProvider>
      <AppRouter/>
    </StoreProvider>
  )
}

export default App