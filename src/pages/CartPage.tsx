import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, total, removeItem, addItem, decreaseQuantity } = useCartStore();

  const handleWhatsAppCheckout = () => {
    const message = `Hola! Me gustaría ordenar:\n\n${items
      .map((item) => `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n')}\n\nTotal: $${total.toFixed(2)}`;
    
    window.open(`https://wa.me/+5351228828?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Shop</span>
        </button>

        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-0">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => addItem(item)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Pay via WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};