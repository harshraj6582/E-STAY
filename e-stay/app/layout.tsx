import type { Metadata } from 'next'
import { Inter  , Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
const inter = Inter({ subsets: ['latin'] })
import Modal from './components/modals/Modals'

export const metadata: Metadata = {
  title: 'E-Stay',
  description: 'Plan Your Vacation',
}

const font = Nunito ({
  subsets : ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <Modal  title = "Hello " isOpen/>
      <Navbar/>
      </ClientOnly>
        
        {children}
        
        
        </body>
    </html>
  )
}
