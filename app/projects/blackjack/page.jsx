import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const About = () => {

  return (
    <div className='container_section'>
                  <title>Yoskorn | Project-BlackJack on Terminal</title>

      <div className='max-w-7xl'>
        <h1 className='head_text'>
          <div className='text-center flex flex-col content-center justify-center'>

            <div className='flex flex-col md:flex-row'>
              <div className='flex-1 px-5 mr-5'>
                <p className="mb-3 font-semibold text-base text-left">Game Development · 2018</p>
                <p className="mb-5 text-left text-4xl font-bold">Terminal Blackjack Game in C</p>
                <p className="mb-5 body_text text-left">The Terminal Blackjack Game is a command-line application developed in C that simulates the classic casino card game Blackjack. Players interact with the game through the terminal, making decisions such as hitting, standing, or doubling down to compete against each other.</p>

                <div className='flex flex-row text-left'>
                  <div className='flex-1 '>
                    Technical field
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Game Development,</li>
                      <li>Logic</li>
                    </ul>

                  </div>
                  <div className='flex-1'>
                    Tools Used
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>C</li>
                    </ul>
                  </div>

                </div>
                <Link href="https://github.com/Yoskorn-Git/blackjack-terminal-game">
                  
                  <button className="outline_btn body_text">
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/696969/cursor.png" alt="cursor" />
                    <span className='px-1'>Source Code</span>
                  </button>
                </Link>

              </div>
              <div className='flex-1 text-left px-5 body_text mt-14 md:mt-0 drop-shadow-xl'>
                {/* <h2 className="head_text font-bold mb-3">Video Demo</h2> */}
                <div className='relative w-full  '>
                  <Image
                    src="/assets/images/blackjack/blackjack-01.png"
                    alt="Preview Image"
                    layout="responsive"
                    width={1}
                    height={1.5}
                    className='w-full rounded-lg mb-5'
                  />
                  <Image
                    src="/assets/images/blackjack/blackjack-02.png"
                    alt="Preview Image"
                    layout="responsive"
                    width={1}
                    height={1.5}
                    className='w-full rounded-lg '
                  />
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default About;
