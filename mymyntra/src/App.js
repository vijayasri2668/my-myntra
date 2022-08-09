import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Men from './Components/Men';
import Women from './Components/Women';
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
import Category from './Components/Category.js';
// import ViewData from './Components/ViewData';
import Profile from './Components/Profile';
import Beauty from './Components/Beauty';

function App() {
  return (
    <div>
    <Category>
      <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Beauty' element={<Beauty/>} />
      </Routes>
    </Router>
    </div>
    </Category>
    {/* <ViewData /> */}
  </div>
  );
}

export default App;
