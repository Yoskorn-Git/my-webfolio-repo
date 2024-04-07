'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);


    const [hide, setHide] = useState(true);

    useEffect(() => {
        const options = { passive: false }; // options must match add/remove event

        const changeHide = () => {
            if (window.scrollY >= 1000) {
                setHide(false)
            } else setHide(true);
        }

        document.addEventListener("scroll", changeHide, options);
        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("scroll", changeHide, options);
    }, []);

    const handleToggleDropdown = () => {
        setToggleDropdown(!toggleDropdown);
    };

    const handleScrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
        });
        setToggleDropdown(false);
    };

    return (
        <nav className={hide ? 'navbar-body' : 'navbar-body navbar-sticky '} >
            <div className='flex gap-4 items-center'>
                <Link href='/' className='flex flex-col items-center'>
                    <Image
                        src={'/assets/icons/icon-glasses.svg'}
                        width={60}
                        height={60}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                    />
                    <p className='text-2xl hidden md:block font-bold cursor-pointer'>Y. Lertratanakham</p>

                </Link>
            </div>

            <div className='hidden sm:flex items-center'>
                <div className='flex body_text md:gap-5 xl:gap-12 items-center'>
                    <Link href='/#home'>
                        <button className='hover:text-orange-600' >Home</button>
                    </Link>
                    <Link href='/#projects'>
                        <button className='hover:text-orange-600'>Project</button>
                    </Link>
                    <Link href='/#contact'>
                        <button className='hover:text-orange-600'>Contact</button>
                    </Link>
                    <Link href='/CV'>
                        <button className="outline_btn body_text">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Curriculum Vitae</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className='sm:hidden flex relative'>
                <div className='flex'>
                    <div className='sm:hidden flex relative'>

                        <div className='flex'>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" onClick={() => setToggleDropdown(!toggleDropdown)}>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                            {toggleDropdown && (
                                <div className='dropdown'>
                                    <button onClick={() => handleScrollToSection('hero')}>Home</button>
                                    <button onClick={() => handleScrollToSection('about')}>About Me</button>
                                    <button onClick={() => handleScrollToSection('projects')}>Project</button>
                                    <button onClick={() => handleScrollToSection('contact')}>Contact</button>
                                    <Link href='/CV'>
                                        <button className="body_text flex justify-center items-center">
                                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                            <span>Curriculum Vitae</span>
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
