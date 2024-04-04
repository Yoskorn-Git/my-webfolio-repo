'use client'

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import icon from '@public/assets/images/eggheadlogo.png'
// import { useState, useEffect, useCallback } from 'react'

// const navbar = () => {

//     const [toggleDropdown, setToggleDropdown] = useState(false);

//     const [color, setColor] = useState(true);

//     useEffect(() => {
//         const options = { passive: true }; // options must match add/remove event

//         const changeColor = () => {
//             if (window.scrollY >= 1400) {
//                 setColor(true)
//             } else setColor(false);
//         }

//         document.addEventListener("scroll", changeColor, options);
//         // remove event on unmount to prevent a memory leak
//         () => document.removeEventListener("scroll", changeColor, options);
//     }, []);


//     return (
//         <nav className={color ? 'navbar-body navbar-bg ' : 'navbar-body '} >
//             <Link href='/' className='flex gap-4 flex-center'>
//                 {/* <Image
//                     src={icon}
//                     alt='logo'
//                     width={40}
//                     height={40}
//                     className='object-contain'
//                 /> */}
//                 <p className='text-2xl font-bold'>Y. Lertratanakham</p>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className='sm:flex hidden'>
//                 <div className="flex gap-12 items-center">
//                     <Link href={"/create-prompt"}
//                         className=''>
//                         Home
//                     </Link>
//                     <Link href={"/create-prompt"}
//                         className=''>
//                         About me
//                     </Link>
//                     <Link href={"/create-prompt"}
//                         className=''>
//                         Project
//                     </Link>
//                     <Link href={"/create-prompt"}
//                         className=''>
//                         Contact
//                     </Link>
//                     <button className="outline_btn body_text">
//                         <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
//                         <span>Curriculum Vitae</span>
//                     </button>
//                 </div>
//             </div>
//             {/* Mobile Navigation */}
//             <div className='sm:hidden flex relative'>

//                 <div className='flex'>
//                     <Image
//                         src={'/assets/images/logo.svg'}
//                         width={37}
//                         height={37}
//                         className='rounded-full'
//                         alt='profile'
//                         onClick={() => setToggleDropdown(!toggleDropdown)}
//                     />
//                     {toggleDropdown && (
//                         <div className='dropdown'>
//                             <Link
//                                 href='/profile'
//                                 className='dropdown_link'
//                                 onClick={() => setToggleDropdown(false)}
//                             >
//                                 My Profile
//                             </Link>
//                             <Link
//                                 href='/create-prompt'
//                                 className='dropdown_link'
//                                 onClick={() => setToggleDropdown(false)}
//                             >
//                                 Create Prompt
//                             </Link>
//                             <button
//                                 type='button'
//                                 onClick={() => {
//                                     setToggleDropdown(false);
//                                     signOut();
//                                 }}
//                                 className='mt-5 w-full black_btn'
//                             >
//                                 Sign Out
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default navbar

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

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
        <nav className='navbar-body navbar-bg'>
            <div className='flex gap-4 items-center'>
                <Link href='/'>
                    <p className='text-2xl font-bold cursor-pointer'>Y. Lertratanakham</p>
                </Link>
            </div>
            
            <div className='hidden sm:flex gap-12 items-center'>
                <div className='flex gap-12 items-center'>
                    <button onClick={() => handleScrollToSection('hero')}>Home</button>
                    <button onClick={() => handleScrollToSection('about')}>About Me</button>
                    <button onClick={() => handleScrollToSection('projects')}>Project</button>
                    <button onClick={() => handleScrollToSection('contact')}>Contact</button>
                    <Link href='#'>
                        <button className="outline_btn body_text">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Curriculum Vitae</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className='sm:hidden flex relative'>
                <div className='flex'>
                    {/* Your mobile navigation content */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
