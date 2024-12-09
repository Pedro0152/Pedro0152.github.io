import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const ShoppingCartIcon: React.FC = () => {
  const navigate = useNavigate();
  const { items, total } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      onClick={() => navigate('/cart')}
      className="fixed top-4 right-4 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <ShoppingCart className="text-green-600" size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </button>
  );
};