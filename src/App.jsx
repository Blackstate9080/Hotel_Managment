import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import  './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Home />
    </>
  )
}

export default App
