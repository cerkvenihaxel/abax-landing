export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "ABAX Health Service",
    "description": "Auditoría médica integral, consultoría estratégica y análisis de datos para empresas de salud en Argentina",
    "url": "https://abaxhealthservice.com",
    "logo": "https://abaxhealthservice.com/assets/logo-abax.png",
    "image": "https://abaxhealthservice.com/assets/header-top.jpg",
    "telephone": ["+54-351-661-5020", "+54-351-618-4316"],
    "email": "comercial@abaxhealthservice.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressRegion": "Córdoba",
      "addressCountry": "AR"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "foundingDate": "2013",
    "slogan": "Optimizando la gestión de salud con excelencia",
    "knowsAbout": [
      "Auditoría Médica",
      "Auditoría de Materiales Protésicos",
      "Consultoría en Salud",
      "Análisis de Datos en Salud",
      "Outsourcing Médico",
      "Gestión Hospitalaria"
    ]
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Auditoría Médica Integral",
        "description": "Revisión técnica, médica y administrativa de procesos para empresas financiadoras de salud",
        "provider": {
          "@type": "Organization",
          "name": "ABAX Health Service"
        }
      },
      {
        "@type": "Service",
        "name": "Auditoría de Materiales Protésicos",
        "description": "Control de desvíos y soporte en tiempo real para decisiones de autorización",
        "provider": {
          "@type": "Organization",
          "name": "ABAX Health Service"
        }
      },
      {
        "@type": "Service",
        "name": "Consultoría Estratégica en Salud",
        "description": "Acompañamiento en la toma de decisiones de alto impacto y planificación sanitaria",
        "provider": {
          "@type": "Organization",
          "name": "ABAX Health Service"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  )
}
