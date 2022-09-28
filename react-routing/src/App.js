import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Mounting from './components/Mounting';
import Updation from './components/Updation';
import Unmounting from './components/Unmounting';
import './style.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mounting" element={<Mounting />} />
        <Route path="/Unmounting" element={<Unmounting />} />
        <Route path="/Updation" element={<Updation />} />
      </Routes>
    </>
  );
}

export default App;
