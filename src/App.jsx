// App.js
// import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Router
// import Navbar from './components/Navbar'; // Adjust path
import Home from './pages/Home'; // Example pages—add yours
// import EducationHub from './pages/Educationhub';
// import Basic from './pages/Education Hub/Basic';
// import Intermediate from './pages/Education Hub/Intermediate';
// import Advanced from './pages/Education Hub/Advanced';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
// import NotepadWidget from './components/NotepadWidget';

// import Tiptap from './components/Tiptap';
// ... other imports

function App() {
  return (
    <>
    <Router> {/* Wrap here—Navbar and Routes become children */}
      <div className="App">
        {/* <Navbar /> Now in Router context */}
     
        {/* Your Routes—add all pages here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> If you have this
          {/* <Route path="/education" element={<EducationHub />} /> */}
          {/* <Route path="/basic" element={<Basic />} /> */}
          {/* <Route path="/intermediate" element={<Intermediate />} /> */}
          {/* <Route path="/advanced" element={<Advanced />} /> */}
          {/* <Route path="/services" element={<Services />} /> If you have this */}
          <Route path="*" element={<div>404: Not Found</div>} /> {/* Optional catch-all */}
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;