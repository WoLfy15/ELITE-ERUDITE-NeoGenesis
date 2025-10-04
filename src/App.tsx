import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stories from './pages/Stories';
import AboutUs from './pages/AboutUs';
import Floods from './pages/Floods';
import WildFires from './pages/WildFires';
import Glacier from './pages/Glacier';
import SARPredictor from './pages/SARPredictor';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/stories" element={<><Navbar /><Stories /></>} />
            <Route path="/about" element={<><Navbar /><AboutUs /></>} />
            <Route path="/floods" element={<><Navbar /><Floods /></>} />
            <Route path="/wildfires" element={<><Navbar /><WildFires /></>} />
            <Route path="/glacier" element={<><Navbar /><Glacier /></>} />
            <Route path="/sar-predictor" element={<SARPredictor />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;