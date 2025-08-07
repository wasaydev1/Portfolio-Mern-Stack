'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skills = [
    { name: 'HTML5', icon: 'ri-html5-fill', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'ri-css3-fill', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'ri-javascript-fill', color: 'text-yellow-500' },
    { name: 'React', icon: 'ri-reactjs-fill', color: 'text-cyan-500' },
    { name: 'Redux', icon: 'ri-stack-fill', color: 'text-purple-500' },
    { name: 'Node.js', icon: 'ri-nodejs-fill', color: 'text-green-600' },
    { name: 'Express', icon: 'ri-server-fill', color: 'text-gray-600' },
    { name: 'MongoDB', icon: 'ri-database-fill', color: 'text-green-500' },
    { name: 'Git', icon: 'ri-git-branch-fill', color: 'text-orange-600' },
  ];

  // ✅ Fix: Generate random widths only on client
  const [barWidths, setBarWidths] = useState<number[]>([]);

  useEffect(() => {
    const widths = skills.map(() => 85 + Math.floor(Math.random() * 15));
    setBarWidths(widths);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-indigo-50 transition-colors`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={`${skill.icon} text-3xl ${skill.color}`}></i>
                </motion.div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.name}
                </h3>
                
                <motion.div
                  className="w-full bg-gray-200 rounded-full h-2"
                >
                  <motion.div
                    className="bg-indigo-600 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    animate={isInView && barWidths.length > 0 ? { width: `${barWidths[index]}%` } : { width: "0%" }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
