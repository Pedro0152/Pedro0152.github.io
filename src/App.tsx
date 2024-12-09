import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';
import { CateringPage } from './pages/CateringPage';
import { AboutPage } from './pages/AboutPage';
import { useAuthStore } from './store/useAuthStore';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const SecretButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/login')}
      className="fixed left-0 bottom-0 w-4 h-4 bg-white opacity-0 hover:opacity-0 z-50"
      aria-hidden="true"
    />
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <SecretButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;