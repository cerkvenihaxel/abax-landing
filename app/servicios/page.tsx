'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ClipboardDocumentCheckIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  AcademicCapIcon,
  TruckIcon,
  ComputerDesktopIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Auditoría de Prestaciones',
    description: 'Evaluación exhaustiva de servicios médicos para optimizar recursos y mejorar la calidad de atención.',
    icon: ClipboardDocumentCheckIcon,
    features: [
      'Análisis detallado de procesos',
      'Identificación de áreas de mejora',
      'Recomendaciones personalizadas',
      'Seguimiento de implementación'
    ]
  },
  {
    title: 'Outsourcing Profesional',
    description: 'Gestión integral de recursos humanos especializados para instituciones de salud.',
    icon: UserGroupIcon,
    features: [
      'Selección de personal calificado',
      'Capacitación continua',
      'Gestión de nómina',
      'Cumplimiento normativo'
    ]
  },
  {
    title: 'Suministro de Insumos',
    description: 'Provisión de materiales médicos y equipamiento de alta calidad para instituciones de salud.',
    icon: TruckIcon,
    features: [
      'Catálogo completo de insumos',
      'Entrega oportuna',
      'Control de inventario',
      'Soporte técnico'
    ]
  }
]

const additionalServices = [
  {
    title: 'Consultoría en Gestión',
    description: 'Asesoramiento especializado para optimizar la administración de instituciones de salud.',
    icon: ChartBarIcon,
    features: [
      'Análisis organizacional',
      'Planificación estratégica',
      'Optimización de procesos',
      'Mejora continua'
    ]
  },
  {
    title: 'Capacitación',
    description: 'Programas de formación para profesionales de la salud y personal administrativo.',
    icon: AcademicCapIcon,
    features: [
      'Cursos especializados',
      'Talleres prácticos',
      'Certificaciones',
      'Seguimiento de aprendizaje'
    ]
  },
  {
    title: 'Desarrollo Tecnológico',
    description: 'Implementación de soluciones tecnológicas para la gestión eficiente de instituciones de salud.',
    icon: ComputerDesktopIcon,
    features: [
      'Sistemas de gestión',
      'Automatización de procesos',
      'Integración de plataformas',
      'Soporte técnico'
    ]
  }
]

export default function Services() {
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
              Nuestros Servicios
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Soluciones Integrales para la Salud
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Ofrecemos servicios especializados para optimizar la gestión y operación de instituciones de salud.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Servicios Principales
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Soluciones</h2>
            <p className="text-xl text-gray-600">Servicios diseñados para optimizar la gestión de la salud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Servicios Adicionales
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Más Soluciones</h2>
            <p className="text-xl text-gray-600">Complementamos nuestros servicios principales con soluciones especializadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
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
              ¿Listo para optimizar tu gestión?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Descubre cómo nuestros servicios pueden transformar tu organización de salud.
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
                href="/nosotros"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                Conocer Más
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 