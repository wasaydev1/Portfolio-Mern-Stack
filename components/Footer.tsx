
'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-['Pacifico'] text-indigo-400 mb-4">
              Abdul Wasay
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate MERN Stack Developer creating amazing web experiences. 
              Let's build something great together!
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              {[
                { 
                  icon: 'ri-github-fill', 
                  href: 'https://github.com/wasaydev1/',
                  label: 'GitHub',
                  color: 'hover:text-gray-300'
                },
                { 
                  icon: 'ri-linkedin-fill', 
                  href: 'https://linkedin.com/in/abdulwasay',
                  label: 'LinkedIn',
                  color: 'hover:text-blue-400'
                },
                { 
                  icon: 'ri-twitter-fill', 
                  href: 'https://twitter.com/abdulwasay',
                  label: 'Twitter',
                  color: 'hover:text-blue-400'
                },
                { 
                  icon: 'ri-mail-fill', 
                  href: 'mailto:wasay.dev1@gmail.com',
                  label: 'Email',
                  color: 'hover:text-indigo-400'
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors cursor-pointer ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                {new Date().getFullYear()} Abdul Wasay. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Built with React, Next.js & Framer Motion 
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
