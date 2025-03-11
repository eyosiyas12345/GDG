
# Rounter and Navigation

This project biult for as to practicing how routing concept works in react the files contained are: App.jsx, Home.jsx, About.jsx, UseProfile.jsx, NotFound.jsx .

### App.jsx
```javascript

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
```
### Home
```javascript

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
```
### About.jsx
```javascript
// components/About.jsx
import React from 'react';

function About() {
  return <h1>About Page</h1>;
}

export default About;
```
### Contact.jsx
```javascript
// components/Contact.jsx
import React from 'react';

function Contact() {
  return <h1>Contact Page</h1>;
}

export default Contact;
```
### NotFound.jsx
```javascript
// components/NotFound.jsx
import React from 'react';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```
