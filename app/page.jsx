'use client'

import React, { useRef } from 'react'
import Hero from '@components/Hero'
import Project from '@components/Project'
import About from '@components/About'
import Contact from '@components/Contact'
import ScrollSpy from "react-ui-scrollspy";
import NavbarVertical from '@components/NavbarVertical'
import {useIsVisible} from '@components/SmoothAppear'

const Home = () => {

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref2);

  return (
    <>
    <title>Yoskorn | Software Developer</title>
      <NavbarVertical />
      
      <ScrollSpy>
        <section id="home" className='w-full flex justify-center items-center flex-col'>
          <Hero></Hero>
        </section>
        <section id="about" ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <About />
        </section>
        <section id="projects"  ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <Project></Project>
        </section>
        <section id="contact"  ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
          <Contact />
        </section>
      </ScrollSpy>


    </>
  )
}

export default Home