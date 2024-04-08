'use client'
import React from 'react';
import Link from 'next/link';
import 'react-slideshow-image/dist/styles.css'

const About = () => {
  return (
    <div className='container_section'>
            <title>Yoskorn | Project-Thai FoodLens</title>

      <div className='max-w-7xl'>
        <h1 className='head_text'>
          <div className='text-center flex flex-col content-center justify-center'>
            <div className='flex flex-col md:flex-row'>
              <div className='flex-1 px-5 mr-5 sticky-div h-fit'>
                <p className="mb-3 font-semibold text-base text-left ">Mobile Application, UX/UI · 2021</p>
                <p className="mb-5 text-left text-4xl font-bold">Thai FoodLens: AI-Powered Culinary Explorer</p>
                <p className="mb-5 body_text text-left">Thai FoodLens is a mobile application designed to assist foreign travelers in exploring Thai cuisine and making informed dining choices. The app utilizes smartphone cameras for food recognition and menu translation, providing users with detailed information about dishes and personalized food recommendations.</p>

                <div className='flex flex-row text-left'>
                  <div className='flex-1 '>
                    Technical field
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Native Application,</li>
                      <li>Reccommedation System,</li>
                      <li>UX/UI Design,</li>
                      <li>OCR</li>
                    </ul>

                  </div>
                  <div className='flex-1'>
                    Tools Used
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>React Native,</li>
                      <li>Firebase</li>
                      <li>NodeJS</li>
                    </ul>
                  </div>

                </div>
                <Link href="https://github.com/Yoskorn-Git/ArhanThai-Food-Recommender">
                  <button className="outline_btn body_text">
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/696969/cursor.png" alt="cursor" />
                    <span className='px-1'>Source Code</span>
                  </button>
                </Link>

              </div>
              <div className='flex-1 text-left px-5 body_text md:mt-0 drop-shadow-xl'>
              <video className="w-full h-[100vh] mb-4" controls preload="none" autoPlay loop muted>
                  <source src="/demo-foodrec.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="grid gap-4">
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/foodrec/foodrec-07.png"
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/assets/images/foodrec/foodrec-04.png"
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/foodrec/foodrec-06.png"
                        alt="gallery-photo"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/foodrec/foodrec-01.png"
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/assets/images/foodrec/foodrec-03.png"
                        alt="gallery-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/assets/images/foodrec/foodrec-05.png"
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
