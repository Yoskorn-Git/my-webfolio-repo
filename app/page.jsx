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

const home = () => {


  return (
    <>
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
      </ScrollSpy>


    </>
  )
}

export default home