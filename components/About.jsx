import React from 'react';
import Link from 'next/link';

const About = () => {
  const devopsSkills = [
    'Ubuntu/Linux',
    'AWS',
    'Huawei Cloud',
    'Docker',
    'Kubernetes',
    'Gitlab',
    'Argo CD',
    'Ansible',
    'Prometheus',
    'Grafana'
  ];

  const automationSkills = [
    'Python',
    'Bash',
    'Observability',
    'Incident Response',
    'Blue/Green Deployments',
  ];

  const softwareSkills = [
    'JavaScript / TypeScript',
    'Python',
    'Node.js',
    'React & Next.js',
    'React Native',
    'MongoDB',
    'MariaDB',
  ];

  const renderBadges = (items) =>
    items.map((badge) => (
      <span
        key={badge}
        className="inline-flex items-center gap-x-1.5 mr-2 mb-2 py-1 px-3 rounded-md body_text text-sm border border-gray-200 bg-white/80 text-gray-800 shadow-sm"
      >
        {badge}
      </span>
    ));

  const impactMetrics = [
    { title: '12+', subtitle: 'end-to-end CI/CD pipelines built for web & service workloads' },
    { title: '99.9%', subtitle: 'uptime maintained across managed Kubernetes clusters' },
    { title: '6 min', subtitle: 'average deploy time for multi-app release trains after automation' }
  ];

  return (
    <div className="about_section">
      <div className="max-w-7xl">
        <div className="mt-20 text-center flex flex-col content-center justify-center">
          <div className="text-slate-500 text-base font-medium">About Me</div>
          <p className="text-5xl mt-6 font-medium mb-4">{`Hi, I'm Tang Yoskorn`}</p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3 px-2">
            {impactMetrics.map((metric) => (
              <div
                key={metric.title}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-left shadow-sm"
              >
                <p className="text-4xl font-semibold text-slate-900">{metric.title}</p>
                <p className="mt-2 text-sm text-slate-600">{metric.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 flex flex-col md:flex-row md:space-x-10 px-2">
            <div className="flex-1 text-left">
              <p className="mb-5 head_text text-left">Yoskorn Lertratanakham</p>
              <p className="mb-5 body_text text-left">
                I am a DevOps engineer who loves turning infrastructure challenges into scalable, automated solutions.
                My day-to-day revolves around resilient cloud architecture, GitOps practices, and building the guardrails
                that keep shipping fast and safe.
              </p>
              <p className="mb-5 body_text text-left">
                Before leaning into platforms and operations, I grew as a software developer building web, mobile, and data products.
                That product-first mindset helps me collaborate deeply with engineers, understand their needs, and deliver tooling
                that removes friction instead of adding process.
              </p>
              <p className="mb-5 body_text text-left">
                I am currently open to roles where reliability, delivery speed, and developer experience matter.
                Let’s build infrastructure that teams love to work with.
              </p>
              <Link href="/CV">
                <button className="outline_btn body_text">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Curriculum Vitae</span>
                </button>
              </Link>
            </div>
            <div className="flex-1 text-left body_text mt-14 md:mt-0">
              <h2 className="head_text">Capabilities</h2>
              <h2 className="sub_head_text mb-4 text-slate-500">Tooling & Focus Areas</h2>

              <h3 className="sub_head_text mb-1 text-slate-900">DevOps & Cloud</h3>
              {renderBadges(devopsSkills)}

              <h3 className="sub_head_text mb-1 mt-6 text-slate-900">Automation & Reliability</h3>
              {renderBadges(automationSkills)}

              <h3 className="sub_head_text mb-1 mt-6 text-slate-900">Software Engineering</h3>
              {renderBadges(softwareSkills)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
