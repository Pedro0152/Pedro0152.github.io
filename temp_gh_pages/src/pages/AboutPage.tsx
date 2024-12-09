import React from 'react';
import { Navigation } from '../components/Navigation';
import { Clock, MapPin, Phone } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          <p className="mt-2 text-gray-600">Our story and passion for baking</p>
        </div>
        <Navigation />
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">Welcome to Cuatro Estaciones</h2>
            <p className="text-gray-600 mb-8">
              Founded with a passion for creating delicious moments, Cuatro Estaciones has been serving
              our community with the finest cakes and pastries since 2010. Our seasonal menu reflects
              the changing flavors of the year, ensuring you always get the freshest and most delightful
              treats.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="text-gray-600">Calle D % M y 4ta<br />Ampliación de Terraza, Santiago de Cuba</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Horario</h3>
                  <p className="text-gray-600">
                    Mon-Sat: 8:00 AM - 8:00 PM<br />
                    Sun: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Contacto</h3>
                  <p className="text-gray-600">
                    Teléfono: +53 5122828<br />
                    Email: cuatroestaciones404@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};