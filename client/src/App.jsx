import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import FavoritePage from './pages/FavoritePage';
import TerminosPage from './pages/TerminosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/editProfile" element={<ProfilePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/terminos" element={<TerminosPage />} />
      </Routes>
    </Router>
  );
}

export default App;