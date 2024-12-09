import React from 'react';
import { Cake } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { CartButton } from '../components/CartButton';
import { Navigation } from '../components/Navigation';
import { ShoppingCartIcon } from '../components/ShoppingCartIcon';
import { useProducts } from '../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const { products } = useProducts();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-50">
      <button
        onClick={() => navigate('/login')}
        className="fixed left-4 bottom-4 w-3 h-3 bg-black opacity-100 z-50 rounded-full"
        aria-hidden="true"
      />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 mx-auto px-4 py-6 text-center">
              <Cake className="text-green-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">Cuatro Estaciones</h1>
            </div>
            <ShoppingCartIcon />
          </div>
          <p className="mt-2 text-gray-600">Delicious cakes for every season</p>
        </div>
        <Navigation />
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <CartButton />
    </div>
  );
};