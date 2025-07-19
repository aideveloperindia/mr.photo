import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/logo.png" alt="mr.photo" className="h-12 w-auto mb-6" />
              <p className="text-gray-300 mb-6 max-w-md">
                Capturing timeless memories with passion and precision. From soulful weddings 
                to vibrant traditions, we preserve your most precious moments.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/mrphoto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#portfolio" 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#booking" 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  Book Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gold" />
                <span className="text-gray-300">+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gold" />
                <span className="text-gray-300">hello@mrphoto.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-gold" />
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 mr.photo. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Site by <span className="text-gold">Claude AI Assistant</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 