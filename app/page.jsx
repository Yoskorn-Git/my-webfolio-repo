'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@components/Hero'
import Project from '@components/Project'
import 'react-creative-cursor/dist/styles.css';
import About from '@components/About'
import Contact from '@components/Contact'
import ScrollSpy from "react-ui-scrollspy";
import NavbarVertical from '@components/NavbarVertical'
import AnimatedCursor from "react-animated-cursor";

const home = () => {


  return (
    <>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={10}
          outerSize={20}
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <NavbarVertical />
      
      <ScrollSpy>
        <section id="hero" className='w-full flex justify-center items-center flex-col'>
          <Hero></Hero>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project></Project>
        </section>
        <section id="contact">
          <Contact />
        </section>




        <section className='w-full'>
        </section>
      </ScrollSpy>


    </>
  )
}

export default home