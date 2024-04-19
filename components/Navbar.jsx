'use client'

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
    const pathname = usePathname()

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [hide, setHide] = useState(true);

    const [isHomePages, setisHomePages] = useState(true);

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const currentHref = pathname;
        const bool = currentHref.includes('/projects') ? false : true
        setisHomePages(bool)

        const changeHide = () => {
            if (window.scrollY >= 1000) {
                setHide(false)
            } else setHide(true);
        }
        document.addEventListener("scroll", changeHide);
        () => document.removeEventListener("scroll", changeHide);
    }, [pathname]);

    return (
        <nav className={isHomePages ? (hide ? 'navbar-body' : 'navbar-body navbar-sticky-transition') : 'navbar-body navbar-sticky'} >
            {/* <nav className={'navbar-body'} > */}
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
                    <Link href='/'>
                        <button onClick={scrollToTop} className='hover:text-orange-600'>Home</button>
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

                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                    {toggleDropdown && (
                        <div id="dropdownDotsHorizontal" className="z-[4] dropdown bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                            <ul className="py-2 text-sm text-gray-700">
                                <li>
                                    <a href="/#home" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                                </li>
                                <li>
                                    <a href="/#projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a>
                                </li>
                                <li>
                                    <a href="/#contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a>
                                </li>
                            </ul>
                            <div className="py-2">
                                <a href="/CV" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Curriculum Vitae</a>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
