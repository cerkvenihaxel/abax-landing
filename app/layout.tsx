import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import StructuredData from "./components/StructuredData"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://abaxhealthservice.com'),
  title: {
    default: 'ABAX Health Service - Auditoría Médica y Consultoría en Salud Argentina',
    template: '%s | ABAX Health Service'
  },
  description: 'ABAX Health Service ofrece auditoría médica integral, auditoría de materiales protésicos, análisis de datos y consultoría estratégica para empresas de salud en Argentina. Más de 10 años optimizando costos y procesos.',
  keywords: ['auditoría médica', 'auditoría médica argentina', 'ABAX Health', 'consultoría en salud', 'auditoría materiales protésicos', 'análisis datos salud', 'outsourcing médico', 'gestión hospitalaria', 'Córdoba Argentina', 'servicios de salud'],
  authors: [{ name: 'ABAX Health Service' }],
  creator: 'ABAX Health Service',
  publisher: 'ABAX Health Service',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://abaxhealthservice.com',
    siteName: 'ABAX Health Service',
    title: 'ABAX Health Service - Auditoría Médica y Consultoría en Salud',
    description: 'Líderes en auditoría médica integral y consultoría estratégica para empresas de salud en Argentina',
    images: [
      {
        url: '/assets/logo-abax.png',
        width: 1200,
        height: 630,
        alt: 'ABAX Health Service Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABAX Health Service - Auditoría Médica Argentina',
    description: 'Auditoría médica integral y consultoría estratégica para empresas de salud',
    images: ['/assets/logo-abax.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://abaxhealthservice.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
