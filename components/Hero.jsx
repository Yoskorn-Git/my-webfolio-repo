import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
    const [visible, setVisible] = useState(false);
    const highlightItems = [
    {
        title: 'Cloud Infrastructure',
        description: 'Deploying and managing Ubuntu servers, Docker, and containerized workloads across Cloud.',
    },
    {
        title: 'CI/CD Automation',
        description: 'Building reliable pipelines with GitOps workflow to enable smooth delivery.',
    },
    {
        title: 'Security & Compliance',
        description: 'Integrating WAF, dependency scanning, and static analysis for secure delivery pipelines.',
    },
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 50); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, []);

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='' />
            <div className={`hero ${visible ? 'visible' : ''}`}>
                <div className="w-full max-w-5xl flex flex-col items-center text-center gap-8 px-6">
                    <span className="uppercase tracking-[0.35em] text-xs md:text-sm text-orange-500/90">DevOps Engineer · Software Developer</span>
                    <h1 className="tracking-tight font-semibold text-3xl md:text-6xl lg:text-6xl text-slate-900">
                        Automate first, understand later.
                    </h1>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
                        I enjoy automating the boring stuff, wiring up CI/CD pipelines, clean deployments, and side projects no one asked for (but I ship them anyway).
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href='/CV' className="black_btn text-sm md:text-base">
                            View CV
                        </Link>
                        <button onClick={handleScrollToProjects} className="outline_btn text-sm md:text-base">
                            Browse Projects
                        </button>
                    </div>
                    <div className="grid w-full gap-4 md:grid-cols-3 mt-6">
                        {highlightItems.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-left shadow-sm backdrop-blur-sm"
                            >
                                <p className="text-base font-medium text-slate-900">{item.title}</p>
                                <p className="text-sm text-slate-600 mt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
