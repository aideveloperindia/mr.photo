import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mahesh Chimala - mr.photo"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-lg"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Happy Couples</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-elegant font-bold text-white mb-6">
                About Mahesh
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Mahesh Chimala, the creative force behind mr.photo, is a passionate Indian wedding photographer 
                with over a decade of experience capturing life's most precious moments. His journey began with 
                a simple love for storytelling through the lens, and today, he's one of the most sought-after 
                photographers in the region.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Specializing in traditional Indian weddings, pre-wedding shoots, and candid photography, 
                Mahesh has a unique ability to blend artistic vision with cultural authenticity. Every frame 
                tells a story, every moment becomes a timeless memory.
              </p>
            </div>

            {/* Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-800 p-8 rounded-2xl border-l-4 border-gold">
                <blockquote className="text-2xl font-elegant italic text-white mb-4">
                  "Photography is not just about capturing images; it's about preserving emotions, 
                  traditions, and the beautiful chaos of love. Every wedding is unique, and I'm 
                  honored to be part of your special journey."
                </blockquote>
                <cite className="text-gold font-semibold">— Mahesh Chimala</cite>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <Camera className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Artistic Vision</h3>
                <p className="text-gray-300">Unique perspective that transforms ordinary moments into extraordinary memories.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cultural Expertise</h3>
                <p className="text-gray-300">Deep understanding of Indian traditions and wedding ceremonies.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Award Winning</h3>
                <p className="text-gray-300">Recognized for excellence in wedding photography and storytelling.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 