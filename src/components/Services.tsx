import React from 'react';
import { PaintBucket, Home, Brush, PaintRoller, Clock, ThumbsUp } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Pintura Interior',
      description: 'Transformamos los espacios interiores de su hogar con acabados perfectos y colores que reflejan su estilo personal.',
      icon: <Home className="w-10 h-10 text-blue-600" />,
      image: 'https://www.hola.com/horizon/landscape/ef8c58d20e07-pintura-y-colores-13t-t.jpg'
    },
    {
      id: 2,
      title: 'Pintura Exterior',
      description: 'Protegemos y embellecemos la fachada de su propiedad con pinturas de alta calidad resistentes a las inclemencias del tiempo.',
      icon: <PaintBucket className="w-10 h-10 text-blue-600" />,
      image: 'https://blog.homedepot.com.mx/wp-content/uploads/2023/05/imagen1-2.jpeg'
    },
    {
      id: 3,
      title: 'Texturado',
      description: 'Aplicamos diferentes técnicas de texturado para crear efectos únicos y dar carácter a sus paredes.',
      icon: <Brush className="w-10 h-10 text-blue-600" />,
      image: 'https://img.archiexpo.es/images_ae/photo-g/65603-3273613.jpg'
    },
    {
      id: 4,
      title: 'Enduido',
      description: 'Preparamos las superficies con alisado profesional para obtener acabados perfectos en sus paredes y techos.',
      icon: <PaintRoller className="w-10 h-10 text-blue-600" />,
      image: 'https://www.tecnitech.com.ar/images/obra-pintura-enduido-exterior-interior2.jpg'
    }
  ];

  const benefits = [
    {
      title: 'Rápido y Eficiente',
      description: 'Trabajamos cumpliendo los plazos acordados sin comprometer la calidad.',
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Materiales de Calidad',
      description: 'Utilizamos solo productos premium que garantizan durabilidad y excelentes acabados.',
      icon: <ThumbsUp className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas para todas sus necesidades de pintura,
            siempre con la más alta calidad y profesionalismo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="mr-4 bg-white p-3 rounded-full shadow-sm">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;