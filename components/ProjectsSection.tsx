"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Watch Platform",
      description:
        "This is a modern and responsive Watch Website. The website showcases various watch collections with a clean design and smooth user experience.",
      image:
        "Modern e-commerce website interface showing product listings, shopping cart functionality, clean design with payment integration, professional web application screenshot, vibrant colors, user-friendly layout, contemporary UI design",
      technologies: ["React", "Redux", "Node.js", "Express", "LocalStorage"],
      github: "https://github.com/wasaydev1/Watch-Website-React",
      demo: "https://watchey.netlify.app",
    },
    {
      id: 2,
      title: "Age Calculator",
      description:
        "A smart age calculator that lets users enter their birthdate and instantly calculates their exact age in years. Built with HTML, CSS, and JavaScript for clean UI and fast performance.",
      image:
        "Task management application interface with kanban board, drag and drop functionality, team collaboration features, modern dashboard design, productivity app screenshot, organized layout, professional interface",
      technologies: ["Html5", "CSS3", "Adv Javascript"],
      github: "https://github.com/wasaydev1/Age_Calculator",
      demo: "https://agecalculaor.netlify.app/",
    },
    {
      id: 3,
      title: "Tic_Tac_Toe",
      description:
        "An advanced Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against a smart AI or challenge a friend in 2-player mode. Features a clean UI, smooth gameplay, and intelligent move logic.",
      image:
        "Analytics dashboard for social media management with data visualization, post scheduling, and engagement tracking.",
      technologies: ["Html5", "CSS3", "Javascript"],
      github: "https://github.com/wasaydev1/Tic_Tac_Toe",
      demo: "https://tictactoes1.netlify.app/",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and detailed weather information.",
      image:
        "Weather forecast application interface showing current weather conditions, 7-day forecast, interactive weather maps, modern weather app design, clean interface with weather icons and graphics",
      technologies: ["React", "Weather API", "CSS3", "Javascript"],
      github: "https://github.com/wasaydev1/react-weather-app/tree/master",
      demo: "https://wasaydev1.github.io/weather-app/",
    },
    {
      id: 5,
      title: "E-Commerce Store PENDING...",
      description: "pending....",
      image:
        "Blog content management system interface with rich text editor, media gallery, SEO tools, modern CMS dashboard, professional blogging platform, clean editorial interface design",
      technologies: [
        "React",
        "Firebase",
        "Redux-Toolkit",
        "Material UI",
        "Tailwind Css",
      ],
      github: "https://github.com/wasaydev1/",
      demo: "#",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/Images/image${project.id}.jpg`}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-github-fill mr-2"></i>
                      GitHub
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-external-link-fill mr-2"></i>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/wasaydev1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="ri-github-fill mr-2"></i>
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
