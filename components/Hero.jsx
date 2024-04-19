import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 50); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <><div className='' />
            <div className={`hero ${visible ? 'visible' : ''}`}>

                <h1 className={`head_text`}>
                    <div className='text-center flex flex-col content-center place-content-center' >
                        <div className={`text-6xl md:text-9xl mb-6 `} >
                            Passionate
                        </div>
                        <div className={`text-6xl md:text-9xl  '}`}>
                            Coder<a className='text-orange-600'>.</a>
                        </div>
                    </div>
                </h1>
                <p className={`text-lg font-base mt-11 text-center text-black `}>
                    A computer science graduate with a passion for coding, learning, and gaming.
                </p>
            </div>
        </>
    );
}

export default Hero;