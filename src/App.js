// Node modules
import React, { useState } from 'react'

// Provider from context
import { TestProvider } from './context/Vstate'

// Page components
import Home from './components/pages/Home'
import TripsList from './components/pages/TripsList'

// Styles
import './App.scss'

const App = () => {
  const [flag, setFlag] = useState(0)
  // flag = 0     --> Home
  // flag = 1     --> Show data brought back from API request

  const changeScreen = (val) => { setFlag(val) }
  console.log('Active screen: ' + flag)

  return (
    <TestProvider>

        <div>
          {flag === 0 && <Home changeScreen = {changeScreen} />}
          {flag === 1 && <TripsList changeScreen = {changeScreen} />}
        </div>

    </TestProvider>
  )
}

export default App
