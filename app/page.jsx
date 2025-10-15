'use client'

import React from 'react'
import Hero from '@components/Hero'
import Project from '@components/Project'
import About from '@components/About'
import Contact from '@components/Contact'
import ScrollSpy from "react-ui-scrollspy";
import NavbarVertical from '@components/NavbarVertical'

const home = () => {


  return (
    <>
    <title>Yoskorn | DevOps Engineer & Software Developer</title>
      <NavbarVertical />
      
      <ScrollSpy>
        <section id="home" className='w-full flex justify-center items-center flex-col'>
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
