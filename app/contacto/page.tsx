'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import BlurFade from '../components/magicui/blur-fade'
import HexagonPattern from '../components/HexagonPattern'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = `Consulta de ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`
    const body = `Nombre: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Teléfono: ${formData.phone}` : ''}
${formData.company ? `Empresa: ${formData.company}` : ''}

Mensaje:
${formData.message}`

    const mailtoLink = `mailto:comercial@abaxhealthservice.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              Contacto
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de tu Proyecto
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-white/90 max-w-3xl">
              Estamos listos para ayudarte a optimizar la gestión de tu organización de salud.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <BlurFade delay={0.1} inView>
                <div className="bg-white rounded-xl p-6 border border-alice-blue">
                  <div className="w-12 h-12 bg-alice-blue rounded-lg flex items-center justify-center mb-4">
                    <EnvelopeIcon className="w-6 h-6 text-baltic-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 text-sm mb-1">comercial@abaxhealthservice.com</p>
                  <p className="text-gray-600 text-sm">abaxhealthservice@gmail.com</p>
                </div>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <div className="bg-white rounded-xl p-6 border border-alice-blue">
                  <div className="w-12 h-12 bg-alice-blue rounded-lg flex items-center justify-center mb-4">
                    <PhoneIcon className="w-6 h-6 text-baltic-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
                  <p className="text-gray-600 text-sm">(351) 661 5020</p>
                  <p className="text-gray-600 text-sm">(351) 618 4316</p>
                </div>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <div className="bg-white rounded-xl p-6 border border-alice-blue">
                  <div className="w-12 h-12 bg-alice-blue rounded-lg flex items-center justify-center mb-4">
                    <MapPinIcon className="w-6 h-6 text-baltic-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ubicación</h3>
                  <p className="text-gray-600 text-sm">Córdoba, Argentina</p>
                </div>
              </BlurFade>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <BlurFade delay={0.2} inView>
                <div className="bg-white rounded-xl p-8 border border-alice-blue">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Envianos tu Consulta</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="label">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="label">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="+54 11 1234-5678"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="label">
                          Empresa / Institución
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="label">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field resize-none"
                        placeholder="Contanos sobre tu proyecto o consulta..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-alice-blue/30 relative">
        <div className="absolute inset-0 opacity-5">
          <HexagonPattern className="text-baltic-blue" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Gestión Integral en Salud y Análisis de Datos
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nuestro equipo de profesionales está listo para brindarte soluciones personalizadas que se adapten a las necesidades específicas de tu organización.
                </p>
                <p className="text-gray-600 mt-4">Córdoba, Argentina</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
