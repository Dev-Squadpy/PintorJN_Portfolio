import React, { useState } from 'react';

type ServiceProps = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
  };
};

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 transform scale-100"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <div className="mb-4 bg-blue-50 inline-block p-3 rounded-full">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;