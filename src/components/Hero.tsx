import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://vaciamossupiso.com/wp-content/uploads/2023/06/pintor.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformamos Espacios<br />
            <span className="text-yellow-400">Con Pintura Profesional</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
            Más de 8 años de experiencia brindando servicios de pintura
            de la más alta calidad en interiores y exteriores.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#servicios" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 duration-300 shadow-lg"
            >
              Nuestros Servicios
            </a>
            <a 
              href="#contacto" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 duration-300 shadow-lg"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#servicios">
          <ArrowDownCircle size={36} />
        </a>
      </div>
      
      {/* Animated paint drip */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
        <div className="paint-drip"></div>
      </div>
    </section>
  );
};

export default Hero;