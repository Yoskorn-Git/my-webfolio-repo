'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const About = () => {

  return (
    <div className='container_section'>
                  <title>Yoskorn | Project-ThaiEggHead.com</title>

      <div className='max-w-7xl'>
        <h1 className='head_text'>
          <div className='text-center flex flex-col content-center justify-center '>
            <div className='flex flex-col md:flex-row '>
              <div className='flex-1 px-5 mr-5 mt-36 '>
                <p className="mb-3 font-semibold text-base text-left ">Web Application, UX/UI · 2022</p>
                <p className="mb-5 text-left text-4xl font-bold">ThaiEggHead.com</p>
                <p className="mb-5 body_text text-left">ThaiEggHead is a collaborative project aimed at developing a feature-rich social media web application using the MERN stack. The platform enables users to connect, share, and interact with content in a dynamic and engaging online community.</p>

                <div className='flex flex-row text-left'>
                  <div className='flex-1 '>
                    Technical field
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Full Stack App,</li>
                      <li>UX/UI Design</li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    Tools Used
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>ReactJS,</li>
                      <li>MongoDB,</li>
                      <li>ExpressJS,</li>
                      <li>NodeJS,</li>
                      <li>Figma</li>
                    </ul>
                  </div>

                </div>
                <Link href="https://github.com/Yoskorn-Git/ThaiEggHead.com">
                  <button className="outline_btn body_text">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Source Code</span>
                  </button>
                </Link>

              </div>
              <div className='flex-1 text-left px-5 body_text mt-14 md:mt-0 drop-shadow-xl'>
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid gap-4">
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/egghead/egghead-01.png"
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/assets/images/egghead/egghead-02.png"                        
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/egghead/egghead-03.png"                       
                         alt="gallery-photo"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/egghead/egghead-04.png"                        
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/egghead/egghead-05.png"                        
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/assets/images/egghead/egghead-06.png"                        
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/assets/images/egghead/egghead-07.png"                        
                        alt="gallery-photo"
                      />
                    </div>
                  </div>
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
