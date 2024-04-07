'use client'

// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PDFViewer = () => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <title>Yoskorn | CV</title>
            <section className={`container_section`}>
                <div className='pdf_container'>
                    <Viewer
                        fileUrl='/assets/CV_2024.pdf'
                        plugins={[
                            // Register plugins
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>

            </section>
        </>
    )

};

export default PDFViewer;
