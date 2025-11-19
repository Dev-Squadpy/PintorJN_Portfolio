import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">José Luis Núñez</h3>
            <p className="text-blue-200 mb-4">
              Servicios profesionales de pintura con más de 8 años de experiencia.
              Calidad y excelencia en cada proyecto.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Pintura Interior
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Pintura Exterior
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Texturado
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Enduido
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mí" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#trabajos" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-blue-200">+595 994 175 481</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-blue-200">nunezjoseluis027@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-blue-200">Encarnación, Paraguay</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-center md:text-left">
            &copy; {new Date().getFullYear()} José Luis Núñez. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full mt-4 md:mt-0 transition-colors duration-300 focus:outline-none"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;