import React from 'react';
import { Award, Users, Calendar, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Calendar className="w-10 h-10 text-yellow-500" />,
      value: '8+',
      label: 'Años de Experiencia'
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-500" />,
      value: '100+',
      label: 'Clientes Satisfechos'
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      value: '500+',
      label: 'Proyectos Completados'
    }
  ];

  const qualities = [
    'Puntualidad y compromiso',
    'Limpieza en el trabajo',
    'Atención personalizada',
    'Presupuestos detallados',
    'Garantía en todos los trabajos',
    'Uso de materiales de primera calidad'
  ];

  return (
    <section id="sobre-mí" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Pintor Profesional en Paraguay - José Luis Núñez</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pintor profesional con más de 8 años de experiencia en Encarnación y todo Paraguay. 
            Servicio de pintura confiable y garantizado para casas, departamentos y locales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://iili.io/KPbBYJf.jpg" 
                alt="José Luis Núñez trabajando" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-blue-100 rounded-lg -z-0"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">José Luis Núñez</h3>
            <p className="text-lg text-gray-600 mb-6">
              Pintor profesional con más de 8 años de experiencia en Encarnación, Paraguay. 
              Me he especializado en servicios de pintura interior y exterior para casas, 
              departamentos y locales comerciales en todo el país. Mi pasión por este oficio 
              y el compromiso con mis clientes me han permitido trabajar en una amplia variedad 
              de proyectos de pintura en Asunción, Encarnación, Ciudad del Este y todo Paraguay.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Mi filosofía es simple: cada proyecto de pintura merece atención meticulosa, 
              materiales de primera calidad y un acabado perfecto. Como pintor confiable 
              y económico en Paraguay, me enorgullece transformar espacios y superar las 
              expectativas de mis clientes con trabajos garantizados.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-1">{achievement.value}</h3>
              <p className="text-gray-600">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;