import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Video/Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom right, #1a1a1a, #2d2d2d, #000)'
        }}>
          {/* Placeholder for video - you can replace with actual video */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          </div>
        </div>
        <div className="hero-gradient" style={{
          position: 'absolute',
          inset: 0
        }}></div>
      </div>

      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          zIndex: 10
        }}
      >
        <img src="/logo.png" alt="mr.photo" style={{ height: '3rem', width: 'auto' }} />
      </motion.div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
          }}
        >
          mr.photo
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: '1.25rem',
            color: '#e5e5e5',
            marginBottom: '2rem',
            maxWidth: '32rem',
            margin: '0 auto 2rem auto'
          }}
        >
          Capturing timeless memories. From soulful weddings to vibrant traditions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: '#D4AF37',
              color: 'black',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fbbf24';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#D4AF37';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Book Us
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 