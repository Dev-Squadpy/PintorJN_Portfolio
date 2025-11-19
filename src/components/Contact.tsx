import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'Por favor ingrese su nombre';
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingrese su correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un correo electrónico válido';
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'Por favor ingrese su número de teléfono';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'Por favor ingrese un mensaje';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Preparar los datos del formulario para envío por correo
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.nombre);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.telefono);
      formDataToSend.append('service', formData.servicio || 'No especificado');
      formDataToSend.append('message', formData.mensaje);
      formDataToSend.append('subject', `Nuevo mensaje de ${formData.nombre} - Pintura Núñez`);
      formDataToSend.append('from_name', formData.nombre);
      formDataToSend.append('to_name', 'Pintura Núñez');

      // Usar formsubmit.co - servicio gratuito y confiable
      const response = await fetch('https://formsubmit.co/ajax/nunezjoseluis027@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Formulario enviado exitosamente');
        setIsSubmitted(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el envío');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('❌ Ocurrió un error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contacto - Pintor Profesional Paraguay</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Servicio de pintura profesional en Encarnación y todo Paraguay. 
            Solicita tu presupuesto gratuito para pintura de casas, departamentos y locales. 
            Pintor económico y confiable con trabajos garantizados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Teléfono</h4>
                    <p className="text-gray-600">+595 994 175 481</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Email</h4>
                    <p className="text-gray-600">nunezjoseluis027@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Ubicación</h4>
                    <p className="text-gray-600">Encarnación, Paraguay - Servicio en todo el país</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Horario de Atención - Pintor Paraguay</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>7:00 - 17:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábados:</span>
                  <span>7:00 - 11:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 mb-6">
                  Pintor profesional con 8+ años de experiencia en Encarnación, Asunción, 
                  Ciudad del Este y todo Paraguay. Servicio de pintura garantizado 
                  para casas, departamentos y locales comerciales.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Envíenos un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.nombre ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Correo Electrónico *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.telefono ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Servicio de Interés</label>
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Seleccione un servicio</option>
                        <option value="interior">Pintura Interior</option>
                        <option value="exterior">Pintura Exterior</option>
                        <option value="texturado">Texturado</option>
                        <option value="enduido">Enduido</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Mensaje *</label>
                    <textarea
                      name="mensaje"
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.mensaje ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Describa su proyecto o consulta..."
                    />
                    {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors duration-300 flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;