import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import React from 'react'
import { cookies } from 'next/headers';
import GoToTopButton from '../components/GoToTopButton'

const hurmeFont = localFont({
  src: './fonts/HurmeGeometricSans1-Regular.woff2',
  display: 'swap',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Discover top-quality products at unbeatable prices. Shop now and enjoy fast delivery, secure checkout, and excellent customer support.',
  openGraph: {
    title: 'Ecommerce',
    description: 'Discover top-quality products at unbeatable prices. Shop now and enjoy fast delivery, secure checkout, and excellent customer support.',
    url: 'https://next-app-eight-hazel-77.vercel.app/',
    siteName: 'Ecommerce',
    images: [
      {
        url: 'https://theodorealexander.com/images/index.jpg', // ảnh full URL
        width: 1200,
        height: 630,
        alt: 'Ecommerce Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce',
    description: 'Discover top-quality products at unbeatable prices. Shop now and enjoy fast delivery, secure checkout, and excellent customer support.',
    images: ['https://theodorealexander.com/images/index.jpg'],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  const cartId = (await cookies()).get('cartId')?.value;

  return (
    <html lang="en">
      <body className={hurmeFont.className}>
        <Navbar />
        {children}
        <GoToTopButton />
        <Footer />
      </body>
    </html>
  )
}
