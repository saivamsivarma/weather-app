import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // add react-router dom to navigate
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/> {/* By Default it will navigate to Home page */}
      </Routes>
    </Router>
  );
}

export default App;
