import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './pages/UserList'
import Users from './pages/Users'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/Users" element={<Users/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
