import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import FavoritePage from './pages/FavoritePage';
import TerminosPage from './pages/TerminosPage';
import ProductPage from './pages/ProductPage';
import CatalogoProducts from "./components/product/CatalogoProducts";
import CartPage from './pages/CartPage';
import CartWithPage from "./pages/CartWithPage";
import PersonalDataPage from "./pages/PersonalDataPage";
import EntregaPage from './pages/EntregaPage';
import PagoPage from './pages/PagoPage';
import DetalleCompraPage from './pages/DetalleCompra';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ProductInfo" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/catalogo" element={<CatalogoProducts />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/carritoProduct" element={<CartWithPage />} />
        <Route path="/datos" element={<PersonalDataPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/editProfile" element={<ProfilePage />} />
        <Route path="/favorite" element={<FavoritePage />} />      
        <Route path="/terminos" element={<TerminosPage />} />
        <Route path="/Entrega" element={<EntregaPage />} />
        <Route path="/Pago" element={<PagoPage />} />
        <Route path="/Detalle" element={<DetalleCompraPage />} />
      </Routes>
    </Router>
  );
}

export default App;