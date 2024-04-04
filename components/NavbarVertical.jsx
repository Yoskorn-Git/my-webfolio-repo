import React from 'react'

const NavbarVertical = () => {
    const handleScrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className='left-middle'>
                <p data-to-scrollspy-id="hero" className='dot' onClick={() => handleScrollToSection('hero')}></p>
                <p data-to-scrollspy-id="about" className='dot' onClick={() => handleScrollToSection('about')}></p>
                <p data-to-scrollspy-id="projects" className='dot' onClick={() => handleScrollToSection('projects')}></p>
                <p data-to-scrollspy-id="contact" className='dot' onClick={() => handleScrollToSection('contact')}></p>
            </div>
        </>
    )
}

export default NavbarVertical