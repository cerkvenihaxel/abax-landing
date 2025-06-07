'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  HeartIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    title: 'Transparencia',
    description: 'Actuamos con honestidad y evidencias verificables. Informes claros y trazables, comunicación abierta con clientes y proveedores.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Innovación',
    description: 'Buscamos y aplicamos soluciones creativas que generen valor. Uso de BI e IA para detectar desvíos y oportunidades.',
    icon: LightBulbIcon
  },
  {
    title: 'Compromiso',
    description: 'Toda decisión debe favorecer la calidad y seguridad del cuidado. Evaluamos el impacto clínico de nuestras recomendaciones.',
    icon: HeartIcon
  }
]

const team = [
  {
    name: 'Dr. Juan Pérez',
    role: 'Director Médico',
    image: '/team/member1.jpg',
    description: 'Especialista en gestión hospitalaria con más de 15 años de experiencia.'
  },
  {
    name: 'Dra. María García',
    role: 'Directora de Operaciones',
    image: '/team/member2.jpg',
    description: 'Experta en optimización de procesos y gestión de calidad.'
  },
  {
    name: 'Lic. Carlos Rodríguez',
    role: 'Director de Innovación',
    image: '/team/member3.jpg',
    description: 'Especialista en transformación digital y nuevas tecnologías.'
  }
]

const achievements = [
  {
    title: 'Instituciones Atendidas',
    value: '50+',
    description: 'Organizaciones de salud que confían en nosotros',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Años de Experiencia',
    value: '10+',
    description: 'Trayectoria en el sector de la salud',
    icon: ChartBarIcon
  },
  {
    title: 'Presencia Global',
    value: '3',
    description: 'Países con operaciones activas',
    icon: GlobeAltIcon
  }
]

export default function AboutUs() {
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
              Nuestra Historia
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Transformando la Gestión de la Salud
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              ABAX Health Service nace del compromiso por transformar la gestión de las organizaciones de salud con una mirada experta, ética y eficiente.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Aunque nuestra fundación formal fue en mayo de 2024, nuestro recorrido comenzó meses antes, en noviembre de 2023, cuando un grupo de profesionales con amplia trayectoria en el sector sanitario detectó una necesidad concreta: ofrecer soluciones integrales, confiables y técnicamente sólidas a financiadores y prestadores de salud, en un contexto cada vez más exigente y cambiante.
                </p>
                <p>
                  Desde nuestros inicios, nos propusimos construir una alternativa diferente, basada en equipos humanos altamente capacitados, con experiencia real en campo y una fuerte vocación por el trabajo bien hecho. Creemos que la gestión idónea y la transparencia no son opcionales, sino pilares para mejorar los sistemas de salud.
                </p>
                <p>
                  Hoy, en pleno proceso de expansión, consolidamos alianzas estratégicas con empresas afines que comparten nuestra visión, generando vínculos simbióticos que potencian tanto nuestro crecimiento como el de nuestros socios.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/about-hero.jpg"
                alt="Equipo ABAX"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Nuestros Valores
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que nos define</h2>
            <p className="text-xl text-gray-600">Construimos nuestro futuro sobre una base sólida de valores</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Nuestro Equipo
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Profesionales Especializados</h2>
            <p className="text-xl text-gray-600">Equipo interdisciplinario con vasta experiencia en el sector de la salud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
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
              Descubre cómo podemos ayudarte a optimizar tu organización de salud.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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