'use client'

import { motion } from 'framer-motion'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const contactInfo = [
  {
    title: 'Email',
    description: 'contacto@abax.com.ar',
    icon: EnvelopeIcon
  },
  {
    title: 'Teléfono',
    description: '+54 11 1234-5678',
    icon: PhoneIcon
  },
  {
    title: 'Dirección',
    description: 'Av. Corrientes 1234, CABA, Argentina',
    icon: MapPinIcon
  },
  {
    title: 'Horario',
    description: 'Lunes a Viernes de 9:00 a 18:00',
    icon: ClockIcon
  }
]

const faqs = [
  {
    question: '¿Cómo puedo solicitar una consulta?',
    answer: 'Puedes contactarnos a través de nuestro formulario, por email o teléfono. Nuestro equipo te responderá en un plazo máximo de 24 horas hábiles.'
  },
  {
    question: '¿Qué servicios ofrecen?',
    answer: 'Ofrecemos una amplia gama de servicios incluyendo auditoría de prestaciones, outsourcing profesional, suministro de insumos, consultoría en gestión, capacitación y desarrollo tecnológico.'
  },
  {
    question: '¿Trabajan con instituciones internacionales?',
    answer: 'Sí, tenemos experiencia trabajando con instituciones de salud de diferentes países. Nuestras soluciones son adaptables a diferentes contextos y regulaciones.'
  }
]

export default function Contacto() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-600" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Contacto
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Estamos aquí para ayudarte
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Contáctanos para conocer cómo podemos transformar la gestión de tu institución de salud.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Preguntas Frecuentes
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes alguna duda?</h2>
            <p className="text-xl text-gray-600">Resolvemos tus preguntas más comunes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-6"
            >
              ¿Listo para transformar tu gestión?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Únete a las instituciones que ya están optimizando sus procesos con ABAX.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contactar Ahora
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                Ver Servicios
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 