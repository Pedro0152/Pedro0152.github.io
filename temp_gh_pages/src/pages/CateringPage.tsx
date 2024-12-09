import React from 'react';
import { Navigation } from '../components/Navigation';

export const CateringPage: React.FC = () => {
  const handleQuoteRequest = () => {
    const message = "Hello! I'm interested in catering services. Could you provide more information?";
    window.open(`https://wa.me/+1234567890?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Catering Services</h1>
          <p className="mt-2 text-gray-600">Special occasions deserve special treats</p>
        </div>
        <Navigation />
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Catering Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
              <p className="text-gray-600 mb-4">
                Perfect for meetings, conferences, and office celebrations.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Mini pastries assortment</li>
                <li>Custom corporate cakes</li>
                <li>Coffee break packages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Special Celebrations</h3>
              <p className="text-gray-600 mb-4">
                Make your special day even more memorable.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Wedding cakes</li>
                <li>Birthday party packages</li>
                <li>Holiday specials</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleQuoteRequest}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};