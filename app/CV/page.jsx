'use client'

// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

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


const PDFViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <section className='CV_section'>
                <Viewer
                    fileUrl='/assets/CV_2024.pdf'
                    plugins={[
                        // Register plugins
                        defaultLayoutPluginInstance,
                    ]}
                />
            </section>
        </>
    )

};

export default PDFViewer;
