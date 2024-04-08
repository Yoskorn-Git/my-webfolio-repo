'use client'

import React from 'react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';

const Card = (props) => {
    const arrayBadgeItems = props.badges?.map((badge, index) =>
        <span className="
    inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-base font-light text-gray-600 ring-1 ring-inset ring-gray-500/10" key={index}>
            {badge}
        </span>);

    return (
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={false}>
            <div className={`card-project ${props.IsBigCard ? "md:h-[40em]" : "md:h-[22em]"}`}>
                <Image
                    src={props.thumbnail}
                    className='fill-img'
                    alt="Preview Image"
                    fill
                />
                <div className='card-content'>
                    <div className="">
                        <div className="head_text py-3">
                            {props.title}
                            <p className='sub_text'>
                                {props.subtitle}
                            </p>
                        </div>
                        <p className="card_body_text ">
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