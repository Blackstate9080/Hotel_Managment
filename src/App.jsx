import { useState } from 'react';
import './App.css';
import  './index.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { SplashScreen } from "./components/SplashScreen/SplashScreen.jsx";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { Restaurant } from "./pages/Restaurant";
import { Gym } from "./pages/Gym";
import { Events } from "./pages/Events";
import { Contact } from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0)
  const [showSplash, setShowSplash] = useState(true); // Not `isSplashDone`


  return (
    <>
   
      <Router>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/Restaurant' element={<Restaurant />} />
          <Route path='/Gym' element={<Gym />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
         </Routes>
      </Router>
     {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

    </>
  );
};

export default App;
