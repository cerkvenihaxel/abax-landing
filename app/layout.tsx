import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ABAX - Transformando la Gestión de la Salud',
  description: 'Soluciones integrales para la gestión eficiente de instituciones de salud',
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