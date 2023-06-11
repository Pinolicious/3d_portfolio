import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    lovelua,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    python,
    mongodb,
    git,
    figma,
    docker,
    datacom,
    southerncross,
    timbredigital,
    linkedin,
    spaceshoot,
    speedtype,
    portfolio,
    summarizer,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Analytics",
      icon: web,
    },
    {
      title: "Desktop Support",
      icon: mobile,
    },
    {
      title: "Incident Management",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "LÖVE",
      icon: lovelua,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Incident Management",
      company_name: "timbre digital",
      icon: timbredigital,
      iconBg: "#E6DEDD",
      date: "Apr 2021 - Present",
      points: [
        "Assessed incident priority based upon impact to business and escalated issues as necessary.",
        "Handled high priority incidents with exceptional poise and composure, making quick decisions in effort to reduce overall impact.",
        "Communicated regularly with customers concerning alerts and potential issues before they become major issues.",
        "Automated day-to-day task cutting down time spent on task by up to 90%.",
      ],
    },
    {
      title: "Desktop Services Specialist",
      company_name: "timbre digital",
      icon: timbredigital,
      iconBg: "#383E56",
      date: "Apr 2017 - Apr 2021",
      points: [
        "Travelled to setup new international office locations, installing and configure Microsoft Servers and Desktops",
        "Carried out day-to-day duties accurately and efficiently.",
        "Worked with customers to understand needs and provide excellent service.",
        "Used critical thinking to break down problems, evaluate solutions and make decisions.",
      ],
    },

    {
      title: "System Support Analyst",
      company_name: "Datacom",
      icon: datacom,
      iconBg: "#E6DEDD",
      date: "Jan 2014 - Mar 2017",
      points: [
        "Resolved or escalated problem tickets to resolve user issues.",
        "Diagnosed, troubleshot and resolved network and system problems.",
        "Investigated system issues and implemented resolutions to reduce downtime.",
        "Enhanced interfaces to promote better functionality for users.",
      ],
    },
    {
      title: "System Analyst",
      company_name: "Southern Cross Healthcare",
      icon: southerncross,
      iconBg: "#383E56",
      date: "Oct 2010 - Jan 2014",
      points: [
        "Provided client support on system operation and troubleshooting.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to barbell squat that deep and that heavy, but Darren proved me wrong.",
      name: "Cindy Tran",
      designation: "Gym TikToker",
      company: "SheFitness with Cindy T",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    {
      testimonial:
        "I've never met somebody who won a Street Fighter money match without even loading the game.",
      name: "Lewis T. Godfrey",
      designation: "Unprofessional Fighting Game Player",
      company: "Invercargill Fighting Game Community",
      image: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      testimonial:
        "After Darren optimized my Magic the Gathering deck, my win rate increased by 50%. The most degenerate deck tech I've ever seen!",
      name: "Linda Wang",
      designation: "Content Creator",
      company: "MTG Wang Zone",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Space Shooter",
      description:
        "1v1 space shooter, shoot the other player while avoiding asteroids that break into smaller parts when they are shot.",
      tags: [
        {
          name: "LÖVE",
          color: "blue-text-gradient",
        },
      ],
      image: spaceshoot,
      source_code_link: "https://github.com/jdpuyat/Space-Shooter",
    },
    {
      name: "Speed typing test",
      description:
        "Simple speed typing test to calculate your words per minute. I can average around 120wpm.",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: speedtype,
      source_code_link: "https://github.com/jdpuyat/Speed-Type",
    },
    {
      name: "Portfolio",
      description:
        "The website you're viewing right now, my work experience, things I've made so far, my other hobbies and interests.",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/jdpuyat/3d_portfolio",
    },
    {
      name: "AI Article Summarizer",
      description:
        "Website using GPT AI to summarize online articles",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://github.com/jdpuyat/ai_summarizer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };