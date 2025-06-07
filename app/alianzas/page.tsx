'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const alliances = [
  {
    title: 'Alianzas Estratégicas',
    description: 'Colaboraciones con empresas líderes para potenciar nuestros servicios.',
    icon: BuildingOfficeIcon,
    partners: [
      {
        name: 'Empresa 1',
        description: 'Especialista en tecnología médica',
        logo: '/partners/partner1.png'
      },
      {
        name: 'Empresa 2',
        description: 'Líder en gestión hospitalaria',
        logo: '/partners/partner2.png'
      },
      {
        name: 'Empresa 3',
        description: 'Innovación en salud digital',
        logo: '/partners/partner3.png'
      }
    ]
  },
  {
    title: 'Red de Profesionales',
    description: 'Red de expertos y consultores especializados en el sector salud.',
    icon: UserGroupIcon,
    partners: [
      {
        name: 'Dr. Juan Pérez',
        description: 'Especialista en gestión hospitalaria',
        logo: '/professionals/pro1.png'
      },
      {
        name: 'Dra. María García',
        description: 'Experta en auditoría médica',
        logo: '/professionals/pro2.png'
      },
      {
        name: 'Lic. Carlos Rodríguez',
        description: 'Consultor en sistemas de salud',
        logo: '/professionals/pro3.png'
      }
    ]
  },
  {
    title: 'Alianzas Internacionales',
    description: 'Colaboraciones con instituciones de salud a nivel global.',
    icon: GlobeAltIcon,
    partners: [
      {
        name: 'Institución Internacional 1',
        description: 'Centro médico de referencia mundial',
        logo: '/international/int1.png'
      },
      {
        name: 'Institución Internacional 2',
        description: 'Red de hospitales líder',
        logo: '/international/int2.png'
      },
      {
        name: 'Institución Internacional 3',
        description: 'Organización de salud global',
        logo: '/international/int3.png'
      }
    ]
  }
]

const benefits = [
  {
    title: 'Innovación Continua',
    description: 'Acceso a las últimas tecnologías y metodologías en gestión de salud.',
    icon: ChartBarIcon
  },
  {
    title: 'Calidad Garantizada',
    description: 'Estándares de calidad internacionales en todos nuestros servicios.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Compromiso Social',
    description: 'Trabajamos por mejorar la salud y el bienestar de la comunidad.',
    icon: HeartIcon
  }
]

export default function Alliances() {
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
              Trabajamos con los mejores para ofrecer soluciones integrales y de calidad.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Alliances Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Alianzas</h2>
            <p className="text-xl text-gray-600">Colaboraciones estratégicas para potenciar nuestros servicios</p>
          </div>

          <div className="space-y-20">
            {alliances.map((alliance, index) => (
              <motion.div
                key={alliance.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <alliance.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{alliance.title}</h3>
                    <p className="text-gray-600">{alliance.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {alliance.partners.map((partner) => (
                    <div key={partner.name} className="text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h4>
                      <p className="text-gray-600">{partner.description}</p>
                    </div>
                  ))}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Beneficios
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600">Ventajas de trabajar con nuestros aliados estratégicos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-6"
            >
              ¿Quieres ser parte de nuestra red?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Únete a nuestra red de aliados estratégicos y juntos transformemos el futuro de la salud.
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