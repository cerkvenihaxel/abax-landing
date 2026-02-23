'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import BlurFade from '../components/magicui/blur-fade'
import OrbitingCircles from '../components/magicui/orbiting-circles'
import HexagonPattern from '../components/HexagonPattern'

const clients = [
  { name: 'OSDE', category: 'Obra Social' },
  { name: 'Swiss Medical', category: 'Prepaga' },
  { name: 'Galeno', category: 'Prepaga' },
  { name: 'IOMA', category: 'Obra Social' },
  { name: 'PAMI', category: 'Obra Social' },
  { name: 'Medifé', category: 'Prepaga' },
]

const testimonials = [
  {
    quote: 'ABAX nos ayudó a optimizar nuestros procesos de auditoría, reduciendo costos operativos en un 30%.',
    author: 'Director Médico',
    company: 'Empresa Financiadora de Salud',
  },
  {
    quote: 'El servicio de outsourcing médico quirúrgico superó nuestras expectativas en calidad y profesionalismo.',
    author: 'Gerente de Operaciones',
    company: 'Clínica Privada',
  },
]

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-platinum pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-glaucous to-baltic-blue overflow-hidden">
        <div className="absolute inset-0">
          <HexagonPattern className="text-white opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1}>
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nuestros Clientes
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empresas que Confían en ABAX
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-white/90 max-w-3xl">
              Trabajamos con las principales empresas financiadoras de salud y prestadores médicos de Argentina.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Orbiting Clients Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Red de Clientes
            </h2>
          </BlurFade>

          <div className="relative h-[500px] flex items-center justify-center">
            <BlurFade delay={0.2} inView>
              <div className="relative w-32 h-32 bg-baltic-blue rounded-full flex items-center justify-center z-10">
                <Image
                  src="/assets/logo-abax.png"
                  alt="ABAX"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </BlurFade>

            {clients.map((client, idx) => (
              <OrbitingCircles
                key={idx}
                radius={180 + (idx % 2) * 40}
                duration={20 + idx * 2}
                delay={idx * 3}
                reverse={idx % 2 === 0}
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-alice-blue">
                  <span className="text-xs font-semibold text-baltic-blue text-center px-2">
                    {client.name}
                  </span>
                </div>
              </OrbitingCircles>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-alice-blue/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlurFade delay={0.1} inView>
              <div className="text-center">
                <div className="text-4xl font-bold text-baltic-blue mb-2">100+</div>
                <div className="text-gray-600">Instituciones atendidas</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="text-center">
                <div className="text-4xl font-bold text-baltic-blue mb-2">95%</div>
                <div className="text-gray-600">Tasa de satisfacción</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="text-center">
                <div className="text-4xl font-bold text-baltic-blue mb-2">30%</div>
                <div className="text-gray-600">Reducción de costos promedio</div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Lo que Dicen Nuestros Clientes
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <BlurFade key={idx} delay={0.2 + idx * 0.1} inView>
                <div className="bg-alice-blue/30 rounded-xl p-8 border border-alice-blue">
                  <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-baltic-blue">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-baltic-blue to-glaucous relative overflow-hidden">
        <Image
          src="/assets/header-bottom.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-baltic-blue/80" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Querés ser parte de nuestra red de clientes?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/contacto" className="btn-primary bg-white text-baltic-blue hover:bg-alice-blue group">
              Contactanos
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
