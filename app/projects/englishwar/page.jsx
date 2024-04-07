'use client'

// Core viewer
import { Viewer } from '@react-pdf-viewer/core';
import Link from 'next/link';


// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const About = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='container_section'>
                  <title>Yoskorn | Project-English War</title>

      <div className='max-w-7xl'>
        <h1 className='head_text'>
          <div className='text-center flex flex-col content-center justify-center '>
            <div className='flex flex-col '>
              <div className='px-5 mr-5 mt-36 max-w-[50vw]'>
                <p className="mb-3 font-semibold text-base text-left ">Game Development · 2021</p>
                <p className="mb-5 text-left text-4xl font-bold">English War</p>
                <p className="mb-5 body_text text-left">English War is an educational multiplayer game designed to help users learn English vocabulary through interactive gameplay. Developed using Unity, this project combines gaming elements with language learning to create an engaging and immersive experience.</p>

                <div className='flex flex-row text-left'>
                  <div className='flex-1 '>
                    Technical field
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Game Development,</li>
                      <li>API</li>
                    </ul>

                  </div>
                  <div className='flex-1'>
                    Tools Used
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Unity</li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className='pdf_container mt-11'>
                    <Viewer
                        fileUrl='/assets/poster_englishwar.pdf'
                        plugins={[
                            // Register plugins
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>
            </div>

          </div>
        </h1>
      </div>
    </div>
  )
}

export default About;
