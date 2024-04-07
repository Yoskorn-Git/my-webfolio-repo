'use client'
import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { Worker } from '@react-pdf-viewer/core';
import AnimatedCursor from "react-animated-cursor";
import Head from 'next/head';


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={10}
            outerSize={20}
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js"></Worker>
        <div className='main'>
          <main className='app'>
            <Navbar />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout