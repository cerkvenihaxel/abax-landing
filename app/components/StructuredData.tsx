'use client'

import { usePathname } from 'next/navigation'

export default function StructuredData() {
  const pathname = usePathname()

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "ABAX Health Service",
    "alternateName": "ABAX Health Consulting",
    "description": "Consultoría especializada en salud. Auditoría integral, outsourcing médico quirúrgico y gestión para empresas financiadoras de salud.",
    "url": "https://abaxheathservice.com",
    "logo": "https://abaxheathservice.com/logo.svg",
    "image": "https://abaxheathservice.com/logo.svg",
    "telephone": ["+543516615020", "+543516184316"],
    "email": "comercial@abaxheathservice.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Martín de Jauregui N° 1795",
      "addressLocality": "Córdoba",
      "addressRegion": "Córdoba",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.4201,
      "longitude": -64.1888
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "foundingDate": "2024",
    "numberOfEmployees": "10-50",
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "serviceType": [
      "Auditoría Integral en Salud",
      "Consultoría Médica",
      "Outsourcing Médico Quirúrgico",
      "Gestión Hospitalaria",
      "Consultoría en Salud"
    ],
    "knowsAbout": [
      "Auditoría Médica",
      "Gestión Hospitalaria",
      "Consultoría en Salud",
      "Outsourcing Médico",
      "Cirugía",
      "Ginecología",
      "Traumatología",
      "Cirugía General",
      "Cirugía Cardiovascular",
      "Cirugía Vascular"
    ],
    "sameAs": []
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ABAX Health Consulting",
    "alternateName": "ABAX Health Service",
    "url": "https://abaxheathservice.com",
    "description": "Consultoría especializada en salud. Auditoría integral, outsourcing médico quirúrgico y gestión para empresas financiadoras de salud.",
    "inLanguage": "es-AR",
    "publisher": {
      "@type": "Organization",
      "name": "ABAX Health Service",
      "logo": "https://abaxheathservice.com/logo.svg"
    }
  }

  const servicesData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Consultoría en Salud y Auditoría Médica",
    "description": "Servicios de consultoría especializada en salud, auditoría integral, outsourcing médico quirúrgico y gestión para empresas financiadoras de salud.",
    "provider": {
      "@type": "Organization",
      "name": "ABAX Health Service",
      "url": "https://abaxheathservice.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "serviceType": [
      "Auditoría Integral en Empresas financiadoras de Salud",
      "Outsourcing de profesionales médicos quirúrgicos",
      "Consultoría en Gestión Hospitalaria",
      "Suministro de Insumos Médicos"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Consultoría en Salud",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Auditoría Integral en Empresas financiadoras de Salud",
            "description": "Análisis de información de consumo mediante herramientas de Data Analytics y Business Intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outsourcing de profesionales médicos quirúrgicos",
            "description": "Profesionales especializados en Ginecología, Traumatología, Cirugía General, Cardiovascular y Vascular Periférica"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      {pathname === '/servicios' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }}
        />
      )}
    </>
  )
}