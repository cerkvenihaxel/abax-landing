'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ClipboardDocumentCheckIcon, 
  UserGroupIcon, 
  ShoppingCartIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Auditoría de Prestaciones',
    description: 'Revisión exhaustiva de prestaciones médicas para optimizar costos y calidad.',
    icon: ClipboardDocumentCheckIcon,
    features: [
      'Auditoría de facturación',
      'Control de prestaciones',
      'Análisis de costos',
      'Optimización de recursos'
    ]
  },
  {
    title: 'Outsourcing Profesional',
    description: 'Servicios de gestión administrativa y operativa para instituciones de salud.',
    icon: UserGroupIcon,
    features: [
      'Gestión de personal',
      'Administración de convenios',
      'Control de stock',
      'Optimización de procesos'
    ]
  },
  {
    title: 'Suministro de Insumos',
    description: 'Provisión de insumos médicos y equipamiento de alta calidad.',
    icon: ShoppingCartIcon,
    features: [
      'Insumos médicos',
      'Equipamiento',
      'Control de inventario',
      'Logística especializada'
    ]
  }
]

const additionalServices = [
  {
    title: 'Análisis de Datos',
    description: 'Utilizamos Business Intelligence e Inteligencia Artificial para detectar desvíos y oportunidades de mejora.',
    icon: ChartBarIcon
  },
  {
    title: 'Consultoría Especializada',
    description: 'Asesoramiento experto en gestión y optimización de recursos sanitarios.',
    icon: DocumentTextIcon
  },
  {
    title: 'Reportes y Métricas',
    description: 'Informes detallados y métricas de rendimiento para la toma de decisiones.',
    icon: PresentationChartLineIcon
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
              Ofrecemos servicios especializados para optimizar la gestión y el rendimiento de las instituciones de salud.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Principales</h2>
            <p className="text-xl text-gray-600">Soluciones diseñadas para optimizar la gestión de la salud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Servicios Adicionales
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complementamos tu Gestión</h2>
            <p className="text-xl text-gray-600">Herramientas y servicios adicionales para potenciar tu organización</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-6"
            >
              ¿Listo para optimizar tu gestión?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Contáctanos para conocer cómo podemos ayudarte a mejorar la eficiencia de tu organización.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="/contacto"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contactar Ahora
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 