'use client'

import Link from 'next/link'
import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import { BentoGrid, BentoCard } from '../components/magicui/bento-grid'
import AnimatedGridPattern from '../components/magicui/animated-grid-pattern'
import BlurFade from '../components/magicui/blur-fade'
import HexagonPattern from '../components/HexagonPattern'

const services = [
  {
    name: 'Auditoría Integral',
    description: 'Revisión técnica, médica y administrativa de procesos para empresas financiadoras de salud.',
    icon: ClipboardDocumentCheckIcon,
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-alice-blue/30 to-transparent" />
        <HexagonPattern className="absolute inset-0 text-baltic-blue opacity-10" />
      </div>
    ),
  },
  {
    name: 'Auditoría de Materiales Protésicos',
    description: 'Control de desvíos y soporte en tiempo real para decisiones de autorización.',
    icon: BeakerIcon,
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-glaucous/30 to-transparent" />
        <AnimatedGridPattern className="absolute inset-0 opacity-30" />
      </div>
    ),
  },
  {
    name: 'Análisis de Datos',
    description: 'Detección de patrones y oportunidades de mejora mediante Big Data.',
    icon: ChartBarIcon,
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-platinum/30 to-transparent" />
      </div>
    ),
  },
  {
    name: 'Consultoría Estratégica',
    description: 'Acompañamiento en la toma de decisiones de alto impacto y planificación sanitaria.',
    icon: AcademicCapIcon,
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-alice-blue/30 to-transparent" />
        <HexagonPattern className="absolute inset-0 text-baltic-blue opacity-10" />
      </div>
    ),
  },
  {
    name: 'Outsourcing Médico Quirúrgico',
    description: 'Gestión integral de recursos humanos especializados con selección, capacitación continua y cumplimiento normativo.',
    icon: UserGroupIcon,
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-glaucous/30 to-transparent" />
      </div>
    ),
  },
  {
    name: 'Sistemas de Información',
    description: 'Implementación de soluciones tecnológicas para gestión hospitalaria y análisis de datos.',
    icon: ComputerDesktopIcon,
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-platinum/30 to-transparent" />
        <AnimatedGridPattern className="absolute inset-0 opacity-20" />
      </div>
    ),
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-platinum pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-baltic-blue to-baltic-blue-2 overflow-hidden">
        <div className="absolute inset-0">
          <HexagonPattern className="text-white opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1}>
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nuestros Servicios
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soluciones Integrales para el Sector Salud
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-white/90 max-w-3xl">
              Ofrecemos servicios especializados en auditoría, consultoría y gestión para empresas financiadoras de salud y prestadores médicos.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-5">
          <AnimatedGridPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.2} inView>
            <BentoGrid>
              {services.map((service, idx) => (
                <BentoCard
                  key={idx}
                  {...service}
                  cta="Contactar"
                  href="/contacto"
                />
              ))}
            </BentoGrid>
          </BlurFade>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Servicios Detallados
            </h2>
          </BlurFade>

          <div className="space-y-12">
            <BlurFade delay={0.2} inView>
              <div className="bg-alice-blue/30 rounded-xl p-8 border border-alice-blue">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-baltic-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClipboardDocumentCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Auditoría Integral en Empresas Financiadoras de Salud
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Mediante el análisis de la información de consumo brindada por la Institución y mediante usos de herramientas de Data Analytics y Business Intelligence pueden evaluarse desvíos para planificación de las siguientes clases de auditoría:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-baltic-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Facturación médica y administrativa
                      </li>
                      <li className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-baltic-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Especializada en prótesis y ortesis (servicio de consultoría)
                      </li>
                      <li className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-baltic-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Medicación ambulatoria
                      </li>
                      <li className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-baltic-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Especializada en medicación ambulatoria de alto costo (servicio de consultoría)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="bg-alice-blue/30 rounded-xl p-8 border border-alice-blue">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-baltic-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Outsourcing Médico Quirúrgico
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Gestión integral de recursos humanos especializados para instituciones de salud, garantizando profesionales calificados y cumplimiento normativo.
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="bg-alice-blue/30 rounded-xl p-8 border border-alice-blue">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-baltic-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChartBarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Consultoría en Gestión Hospitalaria
                    </h3>
                    <p className="text-gray-600">
                      Optimización de procesos, análisis de costos y mejora continua en la gestión de recursos para instituciones de salud.
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
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
              ¿Necesitás más información sobre nuestros servicios?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl text-white/90 mb-8">
              Contactanos para una consulta personalizada
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <Link href="/contacto" className="btn-primary bg-white text-baltic-blue hover:bg-alice-blue group">
              Contactar ahora
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
