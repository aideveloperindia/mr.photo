import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Award, Sparkles, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" style={{
      padding: '8rem 0',
      background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FF4500 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Indian Pattern Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      {/* Indian Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle, #FFD700 0%, #FFA500 100%)',
        borderRadius: '50%',
        opacity: 0.2,
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle, #FF69B4 0%, #FF1493 100%)',
        borderRadius: '50%',
        opacity: 0.3,
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              border: '3px solid #FFD700'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mahesh Chimmala - mr.photo"
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.1)'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(139, 0, 0, 0.6) 0%, transparent 50%)'
              }} />
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-2rem',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#8B0000',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)',
                textAlign: 'center',
                minWidth: '120px',
                border: '2px solid #FFA500'
              }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>500+</div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Happy Couples
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ paddingLeft: '2rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <Star size={32} color="#FFD700" />
                <h2 style={{
                  fontSize: '3.5rem',
                  fontWeight: '300',
                  color: '#FFD700',
                  fontFamily: 'Playfair Display, serif',
                  margin: 0
                }}>
                  About Mahesh
                </h2>
              </div>
              
              <p style={{
                fontSize: '1.2rem',
                color: '#FFF8DC',
                lineHeight: '1.8',
                marginBottom: '2rem',
                fontWeight: '300'
              }}>
                Mahesh Chimmala, the creative force behind mr.photo, is a passionate Indian wedding photographer 
                with over a decade of experience capturing life's most precious moments. His journey began with 
                a simple love for storytelling through the lens, and today, he's one of the most sought-after 
                photographers in the region.
              </p>
              
              <p style={{
                fontSize: '1.2rem',
                color: '#FFF8DC',
                lineHeight: '1.8',
                marginBottom: '3rem',
                fontWeight: '300'
              }}>
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
              style={{ marginBottom: '3rem' }}
            >
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '2rem',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#8B0000',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Quote
                </div>
                <blockquote style={{
                  fontSize: '1.4rem',
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  color: '#FFF8DC',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  "Photography is not just about capturing images; it's about preserving emotions, 
                  traditions, and the beautiful chaos of love. Every wedding is unique, and I'm 
                  honored to be part of your special journey."
                </blockquote>
                <cite style={{
                  color: '#FFD700',
                  fontWeight: '700',
                  fontSize: '1.1rem'
                }}>
                  — Mahesh Chimmala
                </cite>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
              }}
            >
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '15px',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}
              >
                <Camera style={{ width: '48px', height: '48px', color: '#FFD700', margin: '0 auto 1rem auto' }} />
                <h3 style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Artistic Vision
                </h3>
                <p style={{ color: '#FFF8DC', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Unique perspective that transforms ordinary moments into extraordinary memories.
                </p>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '15px',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}
              >
                <Heart style={{ width: '48px', height: '48px', color: '#FFD700', margin: '0 auto 1rem auto' }} />
                <h3 style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Cultural Expertise
                </h3>
                <p style={{ color: '#FFF8DC', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Deep understanding of Indian traditions and wedding ceremonies.
                </p>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '15px',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}
              >
                <Award style={{ width: '48px', height: '48px', color: '#FFD700', margin: '0 auto 1rem auto' }} />
                <h3 style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Award Winning
                </h3>
                <p style={{ color: '#FFF8DC', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Recognized for excellence in wedding photography and storytelling.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 