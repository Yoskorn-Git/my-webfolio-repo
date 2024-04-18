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
            innerSize={6}
            outerSize={30}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            showSystemCursor={true}
            trailingSpeed={4}
            innerStyle={{
              backgroundColor: '#ea580c'
            }}
            outerStyle={{
              border: '0.5px solid #ea5a0c65'
            }}
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