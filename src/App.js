import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './container/Hello';
import About from './components/About';
import StudyWork from './components/StudyWork';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hello/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/study_work" element={<StudyWork/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
