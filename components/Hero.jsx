import React from 'react'
const Hero = () => {
    return (
        <>
            <div className='hero'>
                <h1 className='head_text'>
                    <div className='text-center flex flex-col content-center place-content-center' >
                        <div className='text-9xl mb-6' >
                            Enthusiastic
                        </div>
                        <div className='text-9xl'>
                            Developer<a className='text-blue-900'>.</a>
                        </div>
                    </div>

                </h1>
                <p className='desc text-center'>
                    A computer science graduate with a passion for software development and machine learning aims to become a great full-stack developer.
                </p>
            </div>
        </>

    )
}

export default Hero