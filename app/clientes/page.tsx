'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BuildingOfficeIcon,
  UserGroupIcon,
  StarIcon,
  ChartBarIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const testimonials = [
  {
    name: 'Dr. Juan Pérez',
    role: 'Director Médico',
    company: 'Hospital Central',
    image: '/testimonials/testimonial1.jpg',
    quote: 'ABAX ha transformado nuestra gestión hospitalaria, optimizando recursos y mejorando la calidad de atención.',
    rating: 5
  },
  {
    name: 'Dra. María García',
    role: 'Gerente de Operaciones',
    company: 'Clínica Privada',
    image: '/testimonials/testimonial2.jpg',
    quote: 'Su enfoque en la eficiencia y la calidad nos ha permitido mejorar significativamente nuestros procesos.',
    rating: 5
  },
  {
    name: 'Lic. Carlos Rodríguez',
    role: 'Director Administrativo',
    company: 'Centro Médico Integral',
    image: '/testimonials/testimonial3.jpg',
    quote: 'La implementación de sus soluciones ha sido clave para nuestro crecimiento y desarrollo.',
    rating: 5
  }
]

const stats = [
  {
    title: 'Instituciones Atendidas',
    value: '50+',
    description: 'Organizaciones de salud que confían en nosotros',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Profesionales Satisfechos',
    value: '1000+',
    description: 'Especialistas que utilizan nuestros servicios',
    icon: UserGroupIcon
  },
  {
    title: 'Años de Experiencia',
    value: '10+',
    description: 'Trayectoria en el sector de la salud',
    icon: ChartBarIcon
  }
]

const services = [
  {
    title: 'Auditoría Médica',
    description: 'Optimización de procesos y control de calidad en prestaciones médicas.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Gestión Hospitalaria',
    description: 'Mejora continua en la administración de recursos y procesos.',
    icon: ChartBarIcon
  },
  {
    title: 'Consultoría Especializada',
    description: 'Asesoramiento experto para el desarrollo de instituciones de salud.',
    icon: HeartIcon
  }
]

export default function Clients() {
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
              Nuestros Clientes
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Instituciones que Confían en Nosotros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Trabajamos con las principales instituciones de salud para transformar la gestión sanitaria.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Testimonios
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Experiencias de instituciones que han transformado su gestión con nosotros</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios para Nuestros Clientes</h2>
            <p className="text-xl text-gray-600">Soluciones especializadas para cada necesidad</p>
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
              ¿Listo para transformar tu gestión?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Únete a las instituciones que ya están optimizando sus procesos con ABAX.
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