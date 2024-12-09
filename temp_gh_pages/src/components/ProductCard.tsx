import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../types/Product';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, decreaseQuantity } = useCartStore();
  const cartItems = useCartStore((state) => state.items);
  const quantity = cartItems.find((item) => item.id === product.id)?.quantity || 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <div className="flex items-center space-x-2">
            {quantity > 0 && (
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
              >
                <Minus size={20} />
              </button>
            )}
            {quantity > 0 && (
              <span className="font-semibold">{quantity}</span>
            )}
            <button
              onClick={() => addItem(product)}
              className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
              disabled={!product.inStock}
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};