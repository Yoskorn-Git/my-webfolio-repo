'use client'

import React from 'react'
import preview from '@public/assets/images/placeholder.jpg'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';

const Card = (props) => {

    const badges = props.badges

    const arrayBadgeItems = props.badges?.map((badge) =>
        <span className="
        inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-base font-light text-gray-600 ring-1 ring-inset ring-gray-500/10" key={badges}>
            {badge}
        </span>);
//md:${props.size}
    return (
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={false}>
            <div className={`h-[50vw] ${props.size} card-single fill`}> 
                <Image
                    src={props.previewimg}
                    className='object-fill'
                    alt="Preview Image"
                    // width="100%" 
                    // height="100%"
                />
                <div className='card-content'>
                    <div className="">
                        <div className="head_text mb-9">
                            {props.title}
                            <p className='sub_text'>
                                {props.subtitle}
                            </p>
                        </div>
                        <p className="body_text">
                            {props.body}
                        </p>
                    </div>
                    <div className="pt-3">
                        {arrayBadgeItems}
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default Card