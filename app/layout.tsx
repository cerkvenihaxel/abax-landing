import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import StructuredData from './components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ABAX Health Consulting | Consultoría en Salud y Auditoría Integral',
  description: 'ABAX Health Service - Consultoría especializada en salud. Auditoría integral, outsourcing médico quirúrgico y gestión para empresas financiadoras de salud en Córdoba, Argentina.',
  keywords: ['ABAX Health Consulting', 'consultoría salud', 'auditoría médica', 'consultoría hospitalaria', 'gestión salud', 'outsourcing médico', 'cirugía', 'Córdoba', 'Argentina', 'empresas financiadoras salud'],
  authors: [{ name: 'ABAX Health Service' }],
  creator: 'ABAX Health Service',
  publisher: 'ABAX Health Service',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://abaxheathservice.com',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://abaxheathservice.com',
    title: 'ABAX Health Consulting | Consultoría en Salud',
    description: 'Consultoría especializada en salud. Auditoría integral, outsourcing médico quirúrgico y gestión para empresas financiadoras de salud.',
    siteName: 'ABAX Health Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABAX Health Consulting | Consultoría en Salud',
    description: 'Consultoría especializada en salud. Auditoría integral, outsourcing médico quirúrgico y gestión para empresas financiadoras de salud.',
  },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}</style>
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-white font-sans antialiased">
        <StructuredData />
        <div id="app-root">
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 