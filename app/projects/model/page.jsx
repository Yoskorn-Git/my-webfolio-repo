import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const About = () => {

  return (
    <div className='container_section'>
      <title>Yoskorn | Project-Hybrid LSTM</title>

      <div className='max-w-7xl'>
        <h1 className='head_text'>
          <div className='text-center flex flex-col content-center justify-center'>
            {/* <div className='text-slate-500 text-base font-medium'>
              About Me
            </div>
            <a className='text-5xl mt-6 font-medium mb-4'>
              {`Hi, I'm Tang Yoskorn`}
            </a> */}
            <div className='flex flex-col md:flex-row'>
              <div className='flex-1 px-5 mr-5'>
                <p className="mb-3 font-semibold text-base text-left">Mechine Learning, Research · 2023</p>
                <p className="mb-5 text-left text-4xl font-bold">A Hybrid Framework Using PCA, EMD and LSTM Methods for Stock Market Price Prediction with Sentiment Analysis </p>
                <p className="mb-5 body_text text-left">This study aimed to enhance stock market price prediction using a hybrid model named PCA-EMD-LSTM, integrating principal component analysis (PCA), empirical mode decomposition (EMD), and long short-term memory (LSTM).</p>

                <div className='flex flex-row text-left'>
                  <div className='flex-1 '>
                    Technical field
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Mechine Learning,</li>
                      <li>Time Series Prediction,</li>
                      <li>NLP</li>
                    </ul>

                  </div>
                  <div className='flex-1'>
                    Tools Used
                    <ul className='text-base font-normal inter-font text-gray-700 py-3'>
                      <li>Keras,</li>
                      <li>Python,</li>
                    </ul>
                  </div>

                </div>
                <Link href="https://www.mdpi.com/1905956">
                  
                  <button className="outline_btn body_text">
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/696969/cursor.png" alt="cursor" />
                    <span className='px-1'>Publisher</span>
                  </button>
                </Link>

              </div>
              <div className='flex-1 text-left px-5 body_text mt-14 md:mt-0 drop-shadow-xl'>
                {/* <h2 className="head_text font-bold mb-3">Video Demo</h2> */}
                <div className='relative w-full  '>
                  <Image
                    src="/assets/images/hybridmodel/hybridmodel-02.png"
                    alt="Preview Image"
                    layout="responsive"
                    width={1}
                    height={1.5}
                    className='w-full'
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
