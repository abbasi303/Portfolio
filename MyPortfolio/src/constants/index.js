import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Hook,
    Pecs,
    Studev,
    lawrence,
    pecs,
    nextjs



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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Next-JS Developer",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "DevOps",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  const academics = [

    {
      title: "Lawrence College Murree",
      company_name: "Highschool",
      icon: lawrence,
      iconBg: "white",
      date: "June 2018 - July 2020",
      points: ["Achieved 945/1100 marks.",
      "Enhanced declamation and debating skills, participating in the English-Speaking Union Public Speaking Contest (Runner Up, 2019).",
      "Organized and presided as Secretary General at the Lawrence College Model United Nations 2019.",
      "Appointed Student Editor of the college magazine “Gallian”, showcasing exceptional reading and writing skills.",
      "Awarded Certificate of Merit by Walker House for outstanding sports, academic, and conduct performance.",
      "Received Certificate of Merit for leadership in Lawrence College Model United Nations 2019. "
    ],
    },
    {
      title: "University of Pecs",
      company_name: "University of Pecs", 
      icon: pecs,
      iconBg: "white",
      date: "September 2021 - July 2024",
      points: [
        "Excellent Computer Science record at University of Pécs, with 168 credit points and a 4.11 average grade.",
        "Proficient in Python, C++, JavaScript, web development (HTML, CSS, Node.js, Express), and SQL databases.",
        "Developed a sample NFT trade website, showcasing web development skills and understanding of emerging technologies.",
        "Seeking an internship or part-time job in the tech industry to gain practical experience and become a versatile developer.",
        "Committed to continuous learning, effective communicator, natural leader, recipient of the Stipendium Hungaricum Scholarship."
      ],
    },
   
  ];
  const experiences = [

    {
      title: "HOOK Student Mentor",
      company_name: "Hook",
      icon: Hook,
      iconBg: "white",
      date: "June 2022 - June 2024",
      points: [
        "Offered guidance on course selection, study strategies, and timemanagement to help mentees succeed academically.",
        "Fostered effective communication and collaboration between mentees andvarious resources, such as professors, counselors, and career services.",
        "Maintained accurate records of the mentorship relationship, trackingprogress, and documenting outcomes to measure effectiveness and enhancethe mentoring experience."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Studev",
      icon: Studev,
      iconBg: "black",
      date: "September 2023 - March 2024",
      points: [
        "Intern at the University of Pécs, Studev Organization",
        "Developed a website for connecting students with companies offering thesisinternships and graduate opportunities",
        "Utilized Typescript and React stack for front-end development, enhancinguser interface and experience",
        "Implemented Tailwind CSS for efficient styling and responsive design",
        "Employed Spring Java and PostgreSQL for robust back-end functionality,ensuring reliable data management and processing",
        "Facilitated seamless integration between front-end and back-end systems,contributing to the overall efficiency of the platform",
        "Engaged in collaborative development, aligning project goals withorganizational objectives and student needs"
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "YelpCamp",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/abbasi303/YelpCamp",
      live_server_link:"https://yelpcamp-3evw.onrender.com",
      type: "webdev",
    },
    {
      name: "ChirpSphere",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "nextauth",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/abbasi303/ChirpSphere",
      live_server_link:"https://chirp-sphere.vercel.app/",
      type: "webdev",

    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      live_server_link:"",
      type: "datascience"


    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      live_server_link:"",
      type: "devops"


    },
  ];

  
  
  export { services, academics, technologies, experiences, testimonials, projects };


