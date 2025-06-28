import { useState } from 'react';
import './App.css';
import  './index.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { Pools } from "./pages/Pools";
import { Bookings } from "./pages/Bookings";
import { Events } from "./pages/Events";
import { Contact } from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/pools' element={<Pools />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
         </Routes>
      </Router>
    
  )
}

export default App;
