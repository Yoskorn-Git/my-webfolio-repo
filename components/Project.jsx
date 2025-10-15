import React from 'react'
import Card from './Card'
import projectData from '../public/data/projects.json';

const Project = () => {
    return (
        <>
            <div className='project_section'>
                <div className='max-w-7xl w-full'>
                    <div className='mt-20 text-center flex flex-col content-center items-center gap-5 px-4'>
                        <span className='text-slate-500 text-base font-medium uppercase tracking-[0.4em]'>
                            Selected Work
                        </span>
                        <p className='text-5xl md:text-6xl font-semibold'>
                            Building the pipelines and products teams rely on.
                        </p>
                        <p className='text-base md:text-lg text-slate-600 max-w-3xl'>
                            A mix of DevOps initiatives and software builds that show how I connect infrastructure automation with user-facing impact.
                        </p>
                    </div>

                    <div className="grid mt-32 grid-cols-1 md:grid-cols-2 gap-8">

                        {projectData.map((card) => (
                            <div key={card.id} className={card.id % 3 === 0 ? "col-span-1 md:col-span-2" : ""}>
                                <a href={card.link}>
                                    <Card
                                        title={card.title}
                                        subtitle={card.subtitle}
                                        body={card.body}
                                        badges={card.badges}
                                        thumbnail={card.thumbnail}
                                        IsBigCard={card.id % 3 === 0}
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
