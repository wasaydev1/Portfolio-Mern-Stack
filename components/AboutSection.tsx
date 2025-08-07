
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Passionate Developer & Problem Solver
            </h3>

            <p className="text-gray-700 leading-relaxed">
              With a strong foundation in full-stack development, I specialize in creating 
              dynamic and responsive web applications using the MERN stack. My journey began 
              with a curiosity for how websites work, which evolved into a passion for 
              crafting digital experiences that make a difference.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies. Whether it's building a complex web application or solving 
              intricate problems, I approach every project with enthusiasm and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-indigo-600">30+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-indigo-600">1+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20young%20software%20developer%20working%20on%20laptop%20in%20modern%20office%20environment%2C%20clean%20workspace%20with%20multiple%20monitors%2C%20focused%20and%20confident%20expression%2C%20natural%20lighting%2C%20high-tech%20atmosphere%2C%20contemporary%20professional%20setting&width=500&height=600&seq=about-developer&orientation=portrait"
                alt="Abdul Wasay - Developer"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
