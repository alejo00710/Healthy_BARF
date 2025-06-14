import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import FavoritePage from './pages/FavoritePage';
import TerminosPage from './pages/TerminosPage';
import ProductPage from './pages/ProductPage';
import CatalogoPage from "./pages/CatalogoPage";
import CartPage from './pages/CartPage';
import CartWithPage from "./pages/CartWithPage";
import PersonalDataPage from "./pages/PersonalDataPage";
import AdminPage from './pages/AdminPage';
import EntregaPage from './pages/EntregaPage';
import PagoPage from './pages/PagoPage';
import DetalleCompraPage from './pages/DetalleCompra';
import {AuthProvider}  from './context/AuthContext';  
import {CartProvider} from './context/CartContext';
import AllOrdersPage from './pages/AllOrdersPage';
import { OrderProvider } from './context/OrderContext';
// import AdminRoute from './admin/adminRoute'; 

function App() {
  return (
    <AuthProvider> 
    <CartProvider>
    <FavoritesProvider>
    <OrderProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/editProfile" element={<ProfilePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/terminos" element={<TerminosPage />} />
        <Route path="/ProductInfo" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/carritoProduct" element={<CartWithPage />} />
        <Route path="/datos" element={<PersonalDataPage />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route
          path="/admin"
          element={
          
              <AdminPage />
         
          }
        />
        <Route path="/Entrega" element={<EntregaPage />} />
        <Route path="/Pago" element={<PagoPage />} />
        <Route path="/Detalle" element={<DetalleCompraPage />} />
        <Route path="/order-details/:orderId" element={<DetalleCompraPage />} />
        <Route path="/all-orders" element={<AllOrdersPage />} />
      </Routes>
    </Router>
    </OrderProvider>
    </FavoritesProvider>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
