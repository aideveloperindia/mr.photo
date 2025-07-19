import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Camera, Heart, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FF4500 100%)'
    }}>
      {/* Indian Pattern Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
        filter: 'blur(1px)'
      }} />
      
      {/* Indian Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.8) 0%, rgba(220, 20, 60, 0.6) 50%, rgba(255, 69, 0, 0.4) 100%)'
      }} />

      {/* Indian Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, #FFD700 0%, #FFA500 100%)',
        borderRadius: '50%',
        opacity: 0.3,
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle, #FF69B4 0%, #FF1493 100%)',
        borderRadius: '50%',
        opacity: 0.4,
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          zIndex: 20
        }}
      >
        <img src="/logo.png" alt="mr.photo" style={{ 
          height: '4rem', 
          width: 'auto',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
        }} />
      </motion.div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 2rem',
        maxWidth: '1200px'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            marginBottom: '2rem'
          }}
        >
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: '300',
            color: '#FFD700',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 8px 32px rgba(0,0,0,0.8)',
            letterSpacing: '0.1em'
          }}>
            mr.photo
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)'
            }} />
            <span style={{
              fontSize: '1.3rem',
              color: '#FFD700',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}>
              Mahesh Chimmala
            </span>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, #FFA500, #FFD700)'
            }} />
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <Camera size={20} color="#FFD700" />
            <span style={{
              fontSize: '1rem',
              color: '#FFD700',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Indian Wedding Photographer
            </span>
            <Heart size={20} color="#FFD700" />
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: '#FFF8DC',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}
        >
          Capturing the magic of Indian weddings with passion and precision. 
          From traditional ceremonies to modern celebrations, every moment becomes a timeless treasure.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              color: '#8B0000',
              padding: '1.2rem 2.5rem',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(255, 215, 0, 0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 215, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 215, 0, 0.4)';
            }}
          >
            View Portfolio
          </button>
          
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: 'transparent',
              color: '#FFD700',
              padding: '1.2rem 2.5rem',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: '2px solid #FFD700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
              e.currentTarget.style.color = '#8B0000';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFD700';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Now
          </button>
        </motion.div>
        
        {/* Indian Cultural Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#FFD700',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#FFD700',
              borderRadius: '50%'
            }} />
            Traditional Ceremonies
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#FFD700',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#FFD700',
              borderRadius: '50%'
            }} />
            Modern Celebrations
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#FFD700',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#FFD700',
              borderRadius: '50%'
            }} />
            Cultural Heritage
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            color: '#FFD700',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span style={{
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: '500'
          }}>
            Explore
          </span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 