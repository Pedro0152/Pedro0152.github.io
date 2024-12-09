import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const CartButton: React.FC = () => {
  const navigate = useNavigate();
  const { items, total } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      onClick={() => navigate('/cart')}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
    >
      <ShoppingCart size={24} />
      <span className="font-semibold">
        {itemCount} items - ${total.toFixed(2)}
      </span>
    </button>
  );
};