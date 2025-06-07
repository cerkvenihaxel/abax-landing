'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { CheckCircleIcon, ArrowRightIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "https://www.youtube.com/embed/yXPlM7yMjYI?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=yXPlM7yMjYI&start=7&playsinline=1&modestbranding=1&rel=0&enablejsapi=1&background=1"
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10" />
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              ref={videoRef}
              className="absolute inset-0 w-full h-full scale-150"
              style={{
                pointerEvents: 'none',
                border: 'none',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.5)',
                width: '100vw',
                height: '100vh',
                objectFit: 'cover'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Soluciones Integrales en Salud
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
            >
              Facilitamos el crecimiento y la gestión de las organizaciones de salud
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto md:mx-0 drop-shadow-md"
            >
              Somos profesionales con más de 15 años en el mercado de la salud, aportando valor para mejorar sustancialmente la gestión de recursos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link href="/servicios" className="btn-primary group">
                Conocé nuestros servicios
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contacto" className="btn-secondary bg-white/10 text-white border-white hover:bg-white/20">
                Contactanos
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Años de experiencia</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Instituciones atendidas</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Profesionales especializados</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Nuestras Soluciones
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceso Rápido</h2>
            <p className="text-xl text-gray-600">Descubrí nuestras soluciones integrales para el sector de la salud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Servicios Principales</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                    Auditoría médica y administrativa
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                    Venta de insumos médicos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                    Outsourcing de equipos médicos
                  </li>
                </ul>
                <Link href="/servicios" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
                  Ver todos los servicios
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Alianzas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Alianzas Estratégicas</h3>
                <p className="text-gray-600 mb-4">
                  Trabajamos junto a empresas clave del ecosistema de salud para brindar soluciones integrales.
                </p>
                <Link href="/alianzas" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Conocé nuestros aliados
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Clientes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <ChartBarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Empresas que confían en nosotros</h3>
                <p className="text-gray-600 mb-4">
                  Estas organizaciones ya confían en ABAX para potenciar su gestión.
                </p>
                <Link href="/clientes" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Ver casos de éxito
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Transformá tu gestión
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-8">¿Listo para transformar tu gestión de salud?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Contactanos
            </Link>
            <Link href="/servicios" className="btn-secondary border-white text-white hover:bg-white/10">
              Conocé nuestros servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 