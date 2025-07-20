import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Camera, Heart } from 'lucide-react';
import BookingForm from './BookingForm';

interface CarouselImage {
  url: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    alt: 'Indian Wedding Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    alt: 'Traditional Haldi Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    alt: 'Mehendi Celebration'
  }
];

const eventNames = [
  "Wedding Ceremonies",
  "Haldi Celebrations",
  "Sangeet Nights",
  "Mehendi Functions",
  "Baraat Processions",
  "Reception Parties",
  "Pre-Wedding Shoots",
  "Engagement Moments",
  "Birthday Celebrations",
  "Birthday Song Events"
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    const eventInterval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % eventNames.length);
    }, 2000); // Changed from 3000 to 2000 ms

    return () => {
      clearInterval(imageInterval);
      clearInterval(eventInterval);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={carouselImages[0].url}
        >
          <source src="https://player.vimeo.com/external/517161838.sd.mp4?s=b0c1828daa64fc9b68c3f32bf6bc89d2d3c89d93&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Image Carousel (shows when video is loading or not supported) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={carouselImages[currentImageIndex].url}
            alt={carouselImages[currentImageIndex].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="h-16 sm:h-24 flex items-center justify-center mt-16 sm:mt-0"> {/* Adjusted height and added margin top for mobile */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentEventIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-5xl md:text-7xl font-elegant text-white px-4"
              >
                {eventNames[currentEventIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[2px] w-20 bg-gold" />
            <span className="text-xl md:text-2xl text-gold font-elegant">
              Mahesh Chimmalla
            </span>
            <div className="h-[2px] w-20 bg-gold" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-elegant px-4">
            Capturing timeless memories. From soulful weddings to vibrant traditions.
          </p>

          <div className="flex items-center justify-center space-x-2 text-gold px-4">
            <Camera size={24} />
            <span className="text-base sm:text-lg uppercase tracking-wider">
              Indian Wedding Photographer
            </span>
            <Heart size={24} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 mb-24 sm:mb-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4" // Increased bottom margin on mobile
          >
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gold text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </button>
            <button
              onClick={() => setIsBookingFormOpen(true)}
              className="w-full sm:w-auto border-2 border-gold text-gold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gold hover:text-black transition-all duration-300 hover:scale-105"
            >
              Book Now
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2" // Hide on mobile, show on desktop
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70 cursor-pointer"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Form */}
      <AnimatePresence>
        {isBookingFormOpen && (
          <BookingForm
            isOpen={isBookingFormOpen}
            onClose={() => setIsBookingFormOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero; 