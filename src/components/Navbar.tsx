import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="José Luis Núñez Logo" 
              className="h-12 w-12 object-contain mr-2"
            />
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              José Luis Núñez
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Trabajos', 'Testimonios', 'Sobre Mí', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors duration-200`}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-blue-900' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {['Inicio', 'Servicios', 'Trabajos', 'Testimonios', 'Sobre Mí', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;