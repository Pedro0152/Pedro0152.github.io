import React from 'react';
import { Cake } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { CartButton } from '../components/CartButton';
import { Navigation } from '../components/Navigation';
import { ShoppingCartIcon } from '../components/ShoppingCartIcon';
import { useProducts } from '../hooks/useProducts';

export const HomePage: React.FC = () => {
  const { products } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50">
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