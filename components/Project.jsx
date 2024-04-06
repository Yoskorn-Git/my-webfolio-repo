import React from 'react'
import Card from './Card'
import { silkworm_preview, hymodel_preview, covid_preview, foodrec_preview, englishwar_preview, egghead_preview, bj_preview } from '@public/assets/images';
import Link from 'next/link';

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
                            <Link href={"/projects/model"}>
                                <Card
                                    title="Silkworm Infections Classification System"
                                    subtitle="Machine Learning, Deep Neuron Network, Computer Vision, Web Development"
                                    body="Developed a system using computer vision and Deep Neural Networks to classify infected silkworms, along with a user-friendly web interface"
                                    badges={["Python", "YOLOv5", "Flask", "Streamlit", "Deep Neuron Network"]}
                                    previewimg={silkworm_preview}
                                    size="md:h-[40vw]"
                                />
                            </Link>

                        </div>
                        <div className="">
                            <Link href={"/projects/model"}>
                                <Card
                                    title="Thai Food Recommendation Application"
                                    subtitle="Mobile Application, API, Computer Vision, UX/UI"
                                    body="Developed mobile application using React Native to help traveler choose thier menu"
                                    badges={["JavaScript", "React Native", "Firebase", "Reccomendation System"]}
                                    previewimg={foodrec_preview}
                                    size="md:h-[23vw]"
                                />
                            </Link>
                        </div>
                        <div className="">
                            <Link href={"/projects/model"}>
                                <Card
                                    title="ThaiEggHead Social Platform"
                                    subtitle="Web Development, MERN Stack, UX/UI"
                                    body="Developed a Social web application using MERN Stack"
                                    badges={["JavaScript", "ReactJS", "MERN Stack"]}
                                    previewimg={egghead_preview}
                                    size="md:h-[23vw]"
                                />
                            </Link>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <Link href={"/projects/model"}>
                                <Card
                                    title="A Hybrid Framework Stock Prediction"
                                    subtitle="Machine Learning, Deep Neuron Network, Computer Vision, Web Development"
                                    body="Proposed a hybrid prediction framework to forecast stock market closing prices."
                                    badges={["Python", "NLP", "Time Serie Prediction", "Hybrid Model"]}
                                    previewimg={hymodel_preview}
                                    size="md:h-[40vw]"
                                />
                            </Link>
                        </div>
                        <div className="">
                            <Link href={"/projects/model"}>
                                <Card
                                    title="English War Game"
                                    subtitle="Game Development, UX,UI"
                                    body="Developed a multiplayer english learning game"
                                    badges={["C++", "Unity"]}
                                    previewimg={englishwar_preview}
                                    size="md:h-[23vw]"
                                />
                            </Link>
                        </div>
                        <div className="">
                            <Link href={"/projects/model"}>
                                <Card
                                    title="BlackJack Card Game on Terminal"
                                    subtitle="Game Development"
                                    body="Developed a BlackJack Card Game that play on System Terminal"
                                    badges={["C"]}
                                    previewimg={bj_preview}
                                    size="md:h-[23vw]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Project