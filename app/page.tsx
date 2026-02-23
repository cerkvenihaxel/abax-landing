'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon, ArrowRightIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import BlurFade from './components/magicui/blur-fade'
import HexagonPattern from './components/HexagonPattern'

export default function Home() {
  return (
    <div className="min-h-screen bg-platinum">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/header-top.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-baltic-blue/90 via-baltic-blue/80 to-baltic-blue/90" />
          <HexagonPattern className="absolute inset-0 text-white opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
          <div className="text-center">
            <BlurFade delay={0.1}>
              <div className="inline-block bg-glaucous/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Soluciones Integrales en Salud
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                ABAX Health Consulting: Facilitamos el crecimiento y la gestión de las organizaciones de salud
              </h1>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
                Somos profesionales con más de 10 años de experiencia en consultoría de salud, especializados en auditoría integral y outsourcing médico quirúrgico.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/servicios" className="btn-primary group">
                  Conocé nuestros servicios
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contacto" className="btn-secondary bg-white/10 text-white border-white hover:bg-white/20">
                  Contactanos
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <HexagonPattern className="text-baltic-blue" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlurFade delay={0.1} inView>
              <div className="text-center">
                <div className="text-4xl font-bold text-baltic-blue mb-2">+10</div>
                <div className="text-gray-600">Años de experiencia en consultoría de salud</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="text-center">
                <div className="text-4xl font-bold text-baltic-blue mb-2">100+</div>
                <div className="text-gray-600">Instituciones atendidas</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="text-center">
                <div className="text-4xl font-bold text-baltic-blue mb-2">50+</div>
                <div className="text-gray-600">Profesionales especializados</div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Why ABAX Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué ABAX Health Service es lo que necesitas?
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlurFade delay={0.2} inView>
              <div className="bg-alice-blue/30 rounded-xl p-6 border border-alice-blue">
                <h3 className="text-lg font-semibold text-baltic-blue mb-3">Control de validación y documentación</h3>
                <p className="text-gray-600 text-sm">Verificación exhaustiva de procesos y documentación médica.</p>
              </div>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <div className="bg-alice-blue/30 rounded-xl p-6 border border-alice-blue">
                <h3 className="text-lg font-semibold text-baltic-blue mb-3">Soporte para evitar débitos</h3>
                <p className="text-gray-600 text-sm">Acompañamiento continuo para prevenir rechazos y débitos.</p>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="bg-alice-blue/30 rounded-xl p-6 border border-alice-blue">
                <h3 className="text-lg font-semibold text-baltic-blue mb-3">Control de uso racional de medicamentos</h3>
                <p className="text-gray-600 text-sm">Monitoreo y optimización del uso de medicación.</p>
              </div>
            </BlurFade>

            <BlurFade delay={0.35} inView>
              <div className="bg-alice-blue/30 rounded-xl p-6 border border-alice-blue">
                <h3 className="text-lg font-semibold text-baltic-blue mb-3">Revisión de procesos logísticos</h3>
                <p className="text-gray-600 text-sm">Análisis y mejora de la cadena logística hospitalaria.</p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="bg-alice-blue/30 rounded-xl p-6 border border-alice-blue">
                <h3 className="text-lg font-semibold text-baltic-blue mb-3">Evaluación de indicadores</h3>
                <p className="text-gray-600 text-sm">Medición y seguimiento de KPIs clave del sector salud.</p>
              </div>
            </BlurFade>

            <BlurFade delay={0.45} inView>
              <div className="bg-alice-blue/30 rounded-xl p-6 border border-alice-blue">
                <h3 className="text-lg font-semibold text-baltic-blue mb-3">Diseño de planes de mejora</h3>
                <p className="text-gray-600 text-sm">Estrategias personalizadas para optimización continua.</p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-alice-blue/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <BlurFade delay={0.1} inView>
              <div className="inline-block bg-alice-blue text-baltic-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nuestras Soluciones
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceso Rápido</h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-xl text-gray-600">Descubrí nuestras soluciones integrales para el sector de la salud</p>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlurFade delay={0.2} inView>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-alice-blue">
                <div className="p-8">
                  <div className="w-12 h-12 bg-alice-blue rounded-lg flex items-center justify-center mb-6">
                    <ShieldCheckIcon className="w-6 h-6 text-baltic-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Servicios Principales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-baltic-blue mr-2 flex-shrink-0" />
                      Auditoría integral en empresas financiadoras de salud
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-baltic-blue mr-2 flex-shrink-0" />
                      Outsourcing médico quirúrgico especializado
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-baltic-blue mr-2 flex-shrink-0" />
                      Consultoría en gestión hospitalaria
                    </li>
                  </ul>
                  <Link href="/servicios" className="mt-6 inline-flex items-center text-baltic-blue hover:text-baltic-blue-2">
                    Ver todos los servicios
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-alice-blue">
                <div className="p-8">
                  <div className="w-12 h-12 bg-alice-blue rounded-lg flex items-center justify-center mb-6">
                    <UserGroupIcon className="w-6 h-6 text-baltic-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Alianzas Estratégicas</h3>
                  <p className="text-gray-600 mb-4">
                    Trabajamos junto a empresas clave del ecosistema de salud para brindar soluciones integrales.
                  </p>
                  <Link href="/alianzas" className="inline-flex items-center text-baltic-blue hover:text-baltic-blue-2">
                    Conocé nuestros aliados
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-alice-blue">
                <div className="p-8">
                  <div className="w-12 h-12 bg-alice-blue rounded-lg flex items-center justify-center mb-6">
                    <ChartBarIcon className="w-6 h-6 text-baltic-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Empresas que confían en nosotros</h3>
                  <p className="text-gray-600 mb-4">
                    Estas organizaciones ya confían en ABAX para potenciar su gestión.
                  </p>
                  <Link href="/clientes" className="inline-flex items-center text-baltic-blue hover:text-baltic-blue-2">
                    Ver casos de éxito
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-baltic-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <HexagonPattern className="text-white opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Transformá tu gestión
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl font-bold text-white mb-8">¿Listo para transformar tu gestión de salud?</h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-primary bg-white text-baltic-blue hover:bg-alice-blue">
                Contactanos
              </Link>
              <Link href="/servicios" className="btn-secondary border-white text-white hover:bg-white/10">
                Conocé nuestros servicios
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
