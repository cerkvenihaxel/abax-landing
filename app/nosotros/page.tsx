'use client'

import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import BlurFade from '../components/magicui/blur-fade'
import AnimatedGridPattern from '../components/magicui/animated-grid-pattern'
import HexagonPattern from '../components/HexagonPattern'

const timeline = [
  {
    year: '2013',
    title: 'Fundación de ABAX',
    description: 'Inicio de operaciones con foco en auditoría médica para empresas financiadoras de salud.',
  },
  {
    year: '2015',
    title: 'Expansión de Servicios',
    description: 'Incorporación de servicios de outsourcing médico quirúrgico y consultoría en gestión.',
  },
  {
    year: '2018',
    title: 'Alianzas Estratégicas',
    description: 'Establecimiento de partnerships con laboratorios y prestadores médicos líderes.',
  },
  {
    year: '2020',
    title: 'Transformación Digital',
    description: 'Implementación de soluciones de Data Analytics y Business Intelligence.',
  },
  {
    year: '2024',
    title: 'Liderazgo en el Sector',
    description: 'Más de 100 instituciones atendidas y reconocimiento como referentes en consultoría de salud.',
  },
]

const values = [
  {
    title: 'Experiencia Comprobada',
    description: 'Experiencia comprobada en el sector salud.',
  },
  {
    title: 'Equipo Interdisciplinario',
    description: 'Equipo interdisciplinario con enfoque técnico y estratégico.',
  },
  {
    title: 'Soporte en Tiempo Real',
    description: 'Soporte en tiempo real para decisiones críticas.',
  },
  {
    title: 'Análisis Predictivo',
    description: 'Herramientas de análisis predictivo para la mejora continua.',
  },
  {
    title: 'Compromiso Ético',
    description: 'Compromiso con la ética, la transparencia y la eficiencia.',
  },
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-platinum pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-baltic-blue to-glaucous overflow-hidden">
        <div className="absolute inset-0">
          <HexagonPattern className="text-white opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1}>
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Sobre Nosotros
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ABAX Health Consulting
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-white/90 max-w-3xl">
              Más de 10 años facilitando el crecimiento y la gestión de organizaciones de salud en Argentina.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <BlurFade delay={0.1} inView>
              <div className="bg-alice-blue/30 rounded-xl p-8 border border-alice-blue">
                <h2 className="text-3xl font-bold text-baltic-blue mb-4">Nuestra Misión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Facilitar el crecimiento y la gestión de las organizaciones de salud mediante servicios especializados en auditoría integral, outsourcing médico quirúrgico y consultoría, aportando valor para mejorar sustancialmente la gestión de recursos en empresas financiadoras de salud.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="bg-alice-blue/30 rounded-xl p-8 border border-alice-blue">
                <h2 className="text-3xl font-bold text-baltic-blue mb-4">Nuestra Visión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ser la empresa de consultoría en salud de referencia en Argentina, reconocida por nuestra excelencia, innovación y compromiso con la optimización de recursos y la calidad en la atención médica.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-alice-blue/20 relative">
        <div className="absolute inset-0">
          <AnimatedGridPattern className="opacity-30 text-baltic-blue" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nuestra Trayectoria
            </h2>
          </BlurFade>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <BlurFade key={idx} delay={0.1 + idx * 0.1} inView>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-baltic-blue">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-baltic-blue rounded-full mt-2"></div>
                  <div className="flex-1 bg-white rounded-xl p-6 border border-alice-blue">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nuestro Valor Agregado
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <BlurFade key={idx} delay={0.2 + idx * 0.1} inView>
                <div className="bg-alice-blue/30 rounded-xl p-6 border border-alice-blue text-center">
                  <div className="w-12 h-12 bg-baltic-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-baltic-blue mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-baltic-blue to-glaucous relative overflow-hidden">
        <div className="absolute inset-0">
          <HexagonPattern className="text-white opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Querés conocer más sobre ABAX?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl text-white/90 mb-8">
              Contactanos para una reunión informativa
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <Link href="/contacto" className="btn-primary bg-white text-baltic-blue hover:bg-alice-blue group">
              Contactar
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
