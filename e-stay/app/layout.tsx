import type { Metadata } from 'next'
import { Inter  , Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })

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

        <Navbar/>
        {children}
        
        
        </body>
    </html>
  )
}
