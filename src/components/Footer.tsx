import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/mr-photo-logo.png" alt="Mr.PHOTO" className="h-12 w-auto mb-6" />
              <p className="text-gray-300 mb-6 max-w-md">
                Capturing timeless memories with passion and precision. From soulful weddings 
                to vibrant traditions, we preserve your most precious moments.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/_mr.ph0t0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </motion.div>
          </div>

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
                <span className="text-gray-300">+91 9949546867</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gold" />
                <span className="text-gray-300">mr.photo.maheshchimmala@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-gold" />
                <span className="text-gray-300">Telangana & Andhra Pradesh</span>
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
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © 2025 Mr.PHOTO. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 