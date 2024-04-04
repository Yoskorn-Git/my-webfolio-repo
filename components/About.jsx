import React from 'react';

const About = () => {

  const skillDev = ["JavaScript", "Python", "SQL", "ReactJs", "NextJS", "React Native", "MongoDB", "MySQL", "Git/GitHub", "AWS", "Linux", "Figma"];
  const skillData = ["Apache Airflow", "Pandas", "Keras", "Time Serie Prediction", "Cloud Composer", "BigQuery", "Computer Vision"];

  const arrayDevItems = skillDev.map((badge) =>
    <span className="inline-flex items-center gap-x-1.5 mr-2 mb-2 py-1 px-3 rounded-md body_text text-sm border border-gray-200 bg-white text-gray-800 shadow-sm" key={badge}>
      {badge}
    </span>);

  const arrayDataItems = skillData.map((badge) =>
    <span className="inline-flex items-center gap-x-1.5 mr-2 mb-2 py-1 px-3 rounded-md body_text border border-gray-200 bg-white text-gray-800 shadow-sm" key={badge}>
      {badge}
    </span>);

  return (
    <div className='about_section'>
      <div className='max-w-7xl'>
        <h1 className='head_text'>
          <div className='mt-20 text-center flex flex-col content-center justify-center'>
            <div className='text-slate-500 text-base font-medium'>
              About Me
            </div>
            <a className='text-5xl mt-12 font-medium mb-4'>
              Hi, I'm Tang
            </a>
            <div className='line-title mx-auto'></div>
            <a className='mt-3'>
              “Ambitious | Skilled | Attentive | Dedicated Gamer”
            </a>

            <div className='mt-32 flex'>
              <div className='flex-1 px-5 mr-5'>
                <p className="mb-5 head_text text-left">Who i am ?</p>
                <p className="mb-5 body_text text-left">I am a computer science graduate with a focus on data and machine learning, as well as a strong enjoyment of web development and game development. </p>
                <p className="mb-5 body_text text-left">My professional ambition is to excel as a proficient full-stack developer. Check out some of my work in the Projects section.</p>
                <p className="mb-3 body_text text-left">I am currently open to job opportunities where I can contribute, learn, and grow. If you have a suitable opportunity that matches my skills and experience, please don't hesitate to contact me.</p>
                <button className="outline_btn body_text">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                  <span>Curriculum Vitae</span>
                </button>
              </div>
              <div className='flex-1 text-left px-5 ml-5 body_text'>
                <h2 className="head_text">My Skill</h2>
                <h3 className="sub_head_text mb-2">Software Development</h3>
                {arrayDevItems}
                <h3 className="sub_head_text mb-2 mt-5">Data / Machine Learning</h3>
                {arrayDataItems}
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default About;
