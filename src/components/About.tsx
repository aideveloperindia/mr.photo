import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Award, Sparkles, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-red-500">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="absolute top-[10%] right-[5%] w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-20 animate-float" />
      
      <div className="absolute bottom-[20%] left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 opacity-30 animate-float-reverse" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-3 border-gold">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mahesh Chimmalla - mr.photo"
                className="w-full h-[400px] lg:h-[600px] object-cover brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-8 right-0 lg:-right-8 bg-gradient-to-br from-yellow-400 to-orange-400 text-red-900 p-6 lg:p-8 rounded-2xl shadow-xl border-2 border-orange-400 text-center min-w-[140px]"
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm lg:text-base font-semibold uppercase tracking-wider">
                Happy Couples
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:pl-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Star className="w-8 h-8 text-gold" />
                <h2 className="text-4xl lg:text-5xl font-light text-gold font-elegant">
                  About Mahesh
                </h2>
              </div>
              
              <p className="text-lg lg:text-xl text-amber-50/90 leading-relaxed mb-8 font-light">
                Mahesh Chimmalla, the creative force behind mr.photo, is a passionate Indian wedding photographer 
                with over a decade of experience capturing life's most precious moments. His journey began with 
                a simple love for storytelling through the lens, and today, he's one of the most sought-after 
                photographers in the region.
              </p>
              
              <p className="text-lg lg:text-xl text-amber-50/90 leading-relaxed mb-12 font-light">
                Specializing in traditional Indian weddings, pre-wedding shoots, and candid photography, 
                Mahesh has a unique ability to blend artistic vision with cultural authenticity. Every frame 
                tells a story, every moment becomes a timeless memory.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <div className="relative bg-gradient-to-br from-yellow-400/10 to-orange-400/5 p-8 lg:p-10 rounded-2xl border-2 border-gold/30">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Quote
                </div>
                <blockquote className="text-xl lg:text-2xl font-elegant italic text-amber-50/90 mb-6 leading-relaxed">
                  "Photography is not just about capturing images; it's about preserving emotions, 
                  traditions, and the beautiful chaos of love. Every wedding is unique, and I'm 
                  honored to be part of your special journey."
                </blockquote>
                <cite className="text-gold font-bold text-lg">
                  — Mahesh Chimmalla
                </cite>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="text-center p-8 bg-yellow-400/10 rounded-2xl border-2 border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400/20">
                <Camera className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold mb-2">Premium Equipment</h3>
                <p className="text-amber-50/80">Using top-of-the-line cameras and lenses for the best quality</p>
              </div>

              <div className="text-center p-8 bg-yellow-400/10 rounded-2xl border-2 border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400/20">
                <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold mb-2">Passionate Team</h3>
                <p className="text-amber-50/80">Dedicated professionals who love what they do</p>
              </div>

              <div className="text-center p-8 bg-yellow-400/10 rounded-2xl border-2 border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400/20">
                <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold mb-2">Award Winning</h3>
                <p className="text-amber-50/80">Recognized excellence in wedding photography</p>
              </div>

              <div className="text-center p-8 bg-yellow-400/10 rounded-2xl border-2 border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400/20">
                <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold mb-2">Timeless Style</h3>
                <p className="text-amber-50/80">Creating memories that last generations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 