import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Mendonça Psicoterapia e Cura Energética',
  description: 'Psicoterapia e cura energética para seu bem-estar emocional e espiritual.',
  keywords: ['psicoterapia', 'cura energética', 'terapia online', 'bem-estar emocional', 'desenvolvimento pessoal'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
} 