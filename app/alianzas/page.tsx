'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRightIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const alliances = [
  {
    name: 'Hospital San Juan',
    description: 'Alianza estratégica para la optimización de procesos hospitalarios',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop',
    category: 'Hospital'
  },
  {
    name: 'Clínica Santa María',
    description: 'Colaboración en gestión de calidad y eficiencia operativa',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop',
    category: 'Clínica'
  },
  {
    name: 'Centro Médico ABC',
    description: 'Alianza para la implementación de tecnologías médicas',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop',
    category: 'Centro Médico'
  }
]

const benefits = [
  {
    title: 'Innovación Continua',
    description: 'Acceso a las últimas tecnologías y metodologías en gestión de salud',
    icon: ChartBarIcon
  },
  {
    title: 'Calidad Garantizada',
    description: 'Estándares de calidad internacionales en todos nuestros servicios',
    icon: HeartIcon
  },
  {
    title: 'Compromiso Social',
    description: 'Impacto positivo en la comunidad y el sistema de salud',
    icon: UserGroupIcon
  }
]

export default function Alianzas() {
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
              Alianzas Estratégicas
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Construyendo el Futuro de la Salud
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Trabajamos con instituciones líderes para transformar la gestión de la salud.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Alliances Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Nuestras Alianzas
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Instituciones que Confían en Nosotros</h2>
            <p className="text-xl text-gray-600">Colaboramos con organizaciones líderes en el sector de la salud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alliances.map((alliance, index) => (
              <motion.div
                key={alliance.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={alliance.image}
                    alt={alliance.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {alliance.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{alliance.name}</h3>
                  <p className="text-gray-600">{alliance.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Beneficios
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué Aliarse con Nosotros?</h2>
            <p className="text-xl text-gray-600">Ventajas competitivas para nuestros socios estratégicos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              ¿Listo para ser nuestro aliado?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Únete a nuestra red de instituciones líderes en el sector de la salud.
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