import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Renovación de Pared',
      category: 'Exterior',
      imageUrl: 'https://iili.io/KPDyVXj.jpg'
    },
    {
      id: 2,
      title: 'Fachada Residencial',
      category: 'Exterior',
      imageUrl: 'https://iili.io/KPDiF3b.png'
    },
    {
      id: 3,
      title: 'Renovación de Exterior',
      category: 'Texturado',
      imageUrl: 'https://iili.io/KPbJImF.jpg'
    },
    {
      id: 4,
      title: 'Preparación de Paredes',
      category: 'Enduido',
      imageUrl: 'https://iili.io/KPD6gse.png'
    },
    {
      id: 5,
      title: 'Renovacion de Techo',
      category: 'Interior',
      imageUrl: 'https://iili.io/KPDpjHX.jpg'
    },
    {
      id: 6,
      title: 'Casa Moderna',
      category: 'Exterior',
      imageUrl: 'https://iili.io/KPb9VyX.jpg'
    }
  ];

  return (
    <section id="trabajos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestros Trabajos</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nuestro portafolio de proyectos completados y
            descubra la calidad de nuestro trabajo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
              onClick={() => setSelectedImage(project.imageUrl)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-blue-200">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for image preview */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadeIn" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl max-h-[90vh]">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none"
              >
                <X size={30} />
              </button>
              <img 
                src={selectedImage} 
                alt="Imagen ampliada" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;