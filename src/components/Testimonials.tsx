import React, { useState, useEffect } from 'react';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Experiencia Comprobada Paraguay",
    description: "Más de 8 años como pintor profesional en Encarnación y todo Paraguay. Experiencia comprobada en pintura de interiores y exteriores con técnicas modernas, materiales de primera y resultados de alta calidad garantizados.",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Puntualidad y Seriedad Garantizada",
    description: "Cumplimos los plazos acordados y trabajamos de forma ordenada y profesional. Pintor confiable y serio en Paraguay que respeta su tiempo y entrega trabajos de pintura puntualmente.",
    icon: "⏰"
  },
  {
    id: 3,
    title: "Materiales de Primera Calidad",
    description: "Usamos pinturas y herramientas profesionales de primera marca para garantizar acabados duraderos y de calidad superior en cada proyecto de pintura. Materiales importados y nacionales de excelencia.",
    icon: "🎨"
  },
  {
    id: 4,
    title: "Presupuesto Claro y Económico",
    description: "Sin costos ocultos, todo explicado desde el inicio. Ofrecemos precios económicos y competitivos en Paraguay. Presupuestos detallados y transparentes para pintura de casas y locales.",
    icon: "💰"
  }
];

export default function Testimonials() {
  const [currentBenefit, setCurrentBenefit] = useState(0);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToBenefit = (index: number) => {
    setCurrentBenefit(index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-expand">
            ¿Por qué elegir nuestro servicio de pintura en Paraguay?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Descubre por qué somos la opción preferida de pintores profesionales en Encarnación y todo Paraguay. 
            Servicio de pintura garantizado con más de 8 años de experiencia.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover-lift hover-scale transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentBenefit * 100}%)` }}
            >
              {benefits.map((benefit) => (
                <div key={benefit.id} className="w-full flex-shrink-0 p-8">
                  <div className="text-center">
                    <div className="text-5xl mb-6 animate-bounce">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevBenefit}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover-lift hover-scale transition-all duration-300 z-10"
              aria-label="Beneficio anterior"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextBenefit}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover-lift hover-scale transition-all duration-300 z-10"
              aria-label="Siguiente beneficio"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToBenefit(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBenefit
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Ir al beneficio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl p-8 text-white shadow-2xl animate-expand">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para transformar tu espacio?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Solicita tu presupuesto gratuito y descubre la diferencia de trabajar con profesionales
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover-lift hover-scale transition-all duration-300 shadow-lg cursor-pointer"
            >
              Solicitar Presupuesto Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}