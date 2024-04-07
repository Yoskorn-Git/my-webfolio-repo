import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 100); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <><div className='gradient' />
            <div className={`hero bg-hero ${visible ? 'visible' : ''}`}>
            
                <h1 className={`head_text`}>
                    <div className='text-center flex flex-col content-center place-content-center' >
                        <div className={`text-6xl md:text-9xl mb-6 `} >
                            Enthusiastic
                        </div>
                        <div className={`text-6xl md:text-9xl  '}`}>
                            Developer<a className='text-orange-600'>.</a>
                        </div>
                    </div>
                </h1>
                <p className={`desc text-center`}>
                    A computer science graduate with a passion for software development and machine learning aims to become a great full-stack developer.
                </p>
            </div>
        </>
    );
}

export default Hero;