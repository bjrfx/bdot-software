import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import AboutPage from './pages/About/AboutPage';
import ServicePage from './pages/service/ServicePage';
import TeamPage from './pages/team/TeamPage';
import WhyPage from './pages/why/WhyPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicePage />} />
      <Route path='/team' element={<TeamPage />} />
      <Route path='/why' element={<WhyPage />} />
    </Routes>
  );
}

export default App;
