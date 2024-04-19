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
                        <div className={`tracking-tight font-normal text-6xl md:text-[9rem] mb-6 `} >
                            Pass
                            <span class="i">i</span>
                            onate
                        </div>
                        <div className={`tracking-tight font-normal text-6xl md:text-[9rem]`}>
                            Coder<span className='text-orange-600'>.</span>
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