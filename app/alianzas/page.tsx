'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, BuildingOfficeIcon, HeartIcon, BeakerIcon } from '@heroicons/react/24/outline'
import { BentoGrid, BentoCard } from '../components/magicui/bento-grid'
import BlurFade from '../components/magicui/blur-fade'
import HexagonPattern from '../components/HexagonPattern'
import AnimatedGridPattern from '../components/magicui/animated-grid-pattern'

const alliances = [
  {
    name: 'Laboratorios Farmacéuticos',
    description: 'Alianzas estratégicas con laboratorios líderes para garantizar acceso a medicación de alta calidad y costos optimizados.',
    icon: BeakerIcon,
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-alice-blue/30 to-transparent" />
        <HexagonPattern className="absolute inset-0 text-baltic-blue opacity-10" />
      </div>
    ),
  },
  {
    name: 'Prestadores Médicos',
    description: 'Red de prestadores médicos de excelencia para servicios especializados.',
    icon: HeartIcon,
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-glaucous/30 to-transparent" />
        <AnimatedGridPattern className="absolute inset-0 opacity-30" />
      </div>
    ),
  },
  {
    name: 'Instituciones de Salud',
    description: 'Colaboración con clínicas y hospitales para optimización de procesos.',
    icon: BuildingOfficeIcon,
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-platinum/30 to-transparent" />
      </div>
    ),
  },
  {
    name: 'Empresas de Tecnología Médica',
    description: 'Partnerships con proveedores de tecnología para implementación de soluciones digitales.',
    icon: BuildingOfficeIcon,
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-alice-blue/30 to-transparent" />
        <HexagonPattern className="absolute inset-0 text-baltic-blue opacity-10" />
      </div>
    ),
  },
]

export default function AlianzasPage() {
  return (
    <div className="min-h-screen bg-platinum pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-baltic-blue-2 to-glaucous overflow-hidden">
        <div className="absolute inset-0">
          <HexagonPattern className="text-white opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1}>
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nuestras Alianzas
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Alianzas Estratégicas
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-white/90 max-w-3xl">
              Trabajamos junto a empresas clave del ecosistema de salud para brindar soluciones integrales y de excelencia.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Alliances Bento Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-5">
          <AnimatedGridPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nuestros Aliados Estratégicos
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <BentoGrid>
              {alliances.map((alliance, idx) => (
                <BentoCard
                  key={idx}
                  {...alliance}
                  cta="Contactar"
                  href="/contacto"
                />
              ))}
            </BentoGrid>
          </BlurFade>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-alice-blue/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Beneficios de Nuestras Alianzas
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlurFade delay={0.2} inView>
              <div className="bg-white rounded-xl p-8 border border-alice-blue">
                <h3 className="text-xl font-semibold text-baltic-blue mb-4">Acceso Preferencial</h3>
                <p className="text-gray-600">
                  Condiciones especiales y acceso prioritario a servicios y productos de nuestros aliados.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="bg-white rounded-xl p-8 border border-alice-blue">
                <h3 className="text-xl font-semibold text-baltic-blue mb-4">Optimización de Costos</h3>
                <p className="text-gray-600">
                  Negociaciones conjuntas que permiten reducir costos operativos significativamente.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="bg-white rounded-xl p-8 border border-alice-blue">
                <h3 className="text-xl font-semibold text-baltic-blue mb-4">Calidad Garantizada</h3>
                <p className="text-gray-600">
                  Aliados seleccionados por su excelencia y compromiso con la calidad en salud.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glaucous to-baltic-blue relative overflow-hidden">
        <Image
          src="/assets/header-bottom.jpg"
          alt=""
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-glaucous/80" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Querés formar parte de nuestra red de aliados?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl text-white/90 mb-8">
              Contactanos para explorar oportunidades de colaboración
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
