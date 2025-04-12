import { useState } from 'react'
import './App.css'
import './index.css';
import SplineScene from './components/SplineScene';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [hideAbout, setHideAbout] = useState(false);

  return (
    <>
      <div>
        <SplineScene setHideAbout={setHideAbout} />
        <Header />
        <About hideAbout={hideAbout} />
      </div>
    </>
  )
}

export default App
