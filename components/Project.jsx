import React from 'react'
import Card from './Card'
import { silkworm_preview, hymodel_preview, covid_preview, foodrec_preview, englishwar_preview, egghead_preview, bj_preview } from '@public/assets/images';

const Project = () => {
    return (
        <>
            <div className='project_section'>
                <div className='max-w-7xl'>
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
                        <div className="col-span-1 md:col-span-2">
                            <Card
                                title="Silkworm Infections Classification System"
                                subtitle="Machine Learning, Deep Neuron Network, Computer Vision, Web Development"
                                body="Developed a system using computer vision and Deep Neural Networks to classify infected silkworms, along with a user-friendly web interface"
                                badges={["Python", "YOLOv5", "Flask", "Streamlit", "Deep Neuron Network"]}
                                previewimg={silkworm_preview}
                                size="card-double"
                            />
                        </div>
                        <div className="">
                            <Card
                                title="Thai Food Recommendation Application"
                                previewimg={foodrec_preview}
                                size="card-single"
                            />
                        </div>
                        <div className="">
                            <Card
                                title="ThaiEggHead Social Platform"
                                previewimg={egghead_preview}
                                size="card-single"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <Card
                                title="A Hybrid Framework Stock Prediction"
                                subtitle="Machine Learning, Deep Neuron Network, Computer Vision, Web Development"
                                badges={["Python", "NLP", "Time Serie Prediction", "Hybrid Model"]}
                                previewimg={hymodel_preview}
                                size="card-double"
                            />
                        </div>
                        <div className="">
                            <Card
                                title="English War Game"
                                previewimg={englishwar_preview}
                                size="card-single"
                            />
                        </div>
                        <div className="">
                            <Card
                                title="BlackJack Card Game"
                                previewimg={bj_preview}
                                size="card-single"
                            />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Project