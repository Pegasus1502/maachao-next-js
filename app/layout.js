import './globals.css'
import Navbar from './Components/Navbar'

export const metadata = {
  title: 'HomePage',
  description: 'Demostrating Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
