
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Goal from './routes/Goals';
import Podcast from './routes/Podcast';
import News from './routes/News';
import Action from './routes/Action';
import Signup from './routes/Signup';
import Login from './routes/login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the17goals" element={ <Goal/>} />
        <Route path="/takeactions" element={<Action/>} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
