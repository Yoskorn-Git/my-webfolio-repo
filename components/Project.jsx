import React from 'react'
import Card from './Card'
import Link from 'next/link';

import projectData from '../public/data/projects.json';

const Project = () => {
    return (
        <>
            <div className='project_section'>
                <div className='max-w-7xl w-full'>
                    <h1 className='head_text'>
                        <div className='mt-20 text-center flex flex-col content-center'>
                            <div className='text-slate-500 text-base font-medium'>
                                Recent Project
                            </div>
                            <a className='text-5xl mt-10 font-medium'>
                                Lets take a look at the
                            </a>
                            <a className='text-5xl mt-5 font-medium'>
                                projects I’ve done.
                            </a>

                        </div>
                    </h1>

                    <div className="grid mt-32 grid-cols-1 md:grid-cols-2 gap-8">

                        {projectData.map((card, index) => (
                            
                            <div key={index} className={index % 3 === 0 ? "col-span-1 md:col-span-2" : ""}>
                                <a href={card.link}>
                                    <Card
                                        title={card.title}
                                        subtitle={card.subtitle}
                                        body={card.body}
                                        badges={card.badges}
                                        thumbnail={card.thumbnail}
                                        IsBigCard={index % 3 === 0}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </>
    )
}

export default Project