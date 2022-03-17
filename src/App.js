import Navbar from './layout/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './pages/UserList'
import Home from './pages/Home';
import User from './pages/User';

function App() {
  
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
