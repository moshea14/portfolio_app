import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/About';
import Projects from './components/ProjectPage';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className="bg-gray-600 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </Router> 
  );
}

export default App;