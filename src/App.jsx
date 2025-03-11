
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user/123">User Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ProgrammaticNavigation />
    </Router>
  );
}

function ProgrammaticNavigation(){
  const navigate = useNavigate();
  return(
    <button onClick={() => navigate('/about')}>Go to About (Programmatic)</button>
  )
}

export default App;