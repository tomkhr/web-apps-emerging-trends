import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spline from '@splinetool/react-spline';
import './index.css';
import SplineScene from './components/SplineScene';
import Buttons from './components/Buttons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <SplineScene />
          <Buttons />
      </div>
    </>
  )
}

export default App
