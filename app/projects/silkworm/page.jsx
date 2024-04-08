import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const About = () => {
  
  return (
    <div className='container_section'>
      <title>Yoskorn | Project-SilkSight</title>
      <div className='max-w-7xl'>
        <h1 className='head_text'>
          <div className='text-center flex flex-col content-center justify-center'>

            <div className='flex flex-col md:flex-row'>
              <div className='flex-1 px-5 mr-5'>
                <p className="mb-3 font-semibold text-base text-left">Mechine Learning, Computer Vision · 2023</p>
                <p className="mb-5 text-left text-7xl font-bold">SilkSight </p>
                <p className="mb-5 body_text text-left">SilkSight is an innovative computer vision project developed to assist in sericulture management by accurately detecting infections in silkworms using Deep Neural Networks (DNNs).</p>

                <p className="mb-5 body_text text-left">The system provides a user-friendly web interface for seamless interaction and efficient analysis.</p>

                <div className='flex flex-row text-left'>
                  <div className='flex-1 '>
                    Technical field
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Mechine Learning,</li>
                      <li>Computer Vision,</li>
                      <li>Web Development</li>
                    </ul>

                  </div>
                  <div className='flex-1'>
                    Tools Used
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Keras,</li>
                      <li>YOLOv5,</li>
                      <li>Stremlit</li>
                    </ul>
                  </div>

                </div>
                <Link href="\projects\silkworm\demo">
                  <button className="outline_btn body_text">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Live Demo</span>
                  </button>
                </Link>

              </div>
              <div className='flex-1 text-left px-5 body_text mt-14 md:mt-0 drop-shadow-xl'>
                {/* <h2 className="head_text font-bold mb-3">Video Demo</h2> */}
                <video className="w-full" controls preload="none" autoPlay loop muted>
                  <source src="/demo.mp4" type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className='relative w-full  '>
                  <Image
                    src="/assets/images/silksight/silksight-01.png"
                    alt="Preview Image"
                    layout="responsive"
                    width={1}
                    height={1.5}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default About;
