import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  isVideo?: boolean;
  videoUrl?: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Traditional Wedding Ceremony",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Pre-wedding Shoot",
    category: "Pre-wedding Shoots",
    image: "https://images.unsplash.com/photo-1630742622927-35340e6d0c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Haldi Ceremony",
    category: "Haldi Ceremony",
    image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Sangeet Night",
    category: "Sangeet Ceremony",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    isVideo: true,
    videoUrl: "https://player.vimeo.com/external/517161838.sd.mp4?s=b0c1828daa64fc9b68c3f32bf6bc89d2d3c89d93&profile_id=164&oauth2_token_id=57447761"
  },
  {
    id: 5,
    title: "Wedding Reception",
    category: "Reception",
    image: "https://images.unsplash.com/photo-1620057657902-04b7d7152685?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Mehendi Celebration",
    category: "Mehendi Ceremony",
    image: "https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "Baraat Procession",
    category: "Baraat",
    image: "https://images.unsplash.com/photo-1623145325032-8376e0eef39d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    isVideo: true,
    videoUrl: "https://player.vimeo.com/external/517161838.sd.mp4?s=b0c1828daa64fc9b68c3f32bf6bc89d2d3c89d93&profile_id=164&oauth2_token_id=57447761"
  },
  {
    id: 8,
    title: "Anniversary Celebration",
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1623094646025-3c2b092d5c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 9,
    title: "Baby Shower",
    category: "Baby Showers",
    image: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 10,
    title: "Engagement Ceremony",
    category: "Engagements",
    image: "https://images.unsplash.com/photo-1619901373505-bb71126e5fbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 11,
    title: "Outdoor Couple Shoot",
    category: "Outdoor Shoots",
    image: "https://images.unsplash.com/photo-1630742622927-35340e6d0c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const categories = [
  "All",
  "Weddings",
  "Reception",
  "Haldi Ceremony",
  "Sangeet Ceremony",
  "Mehendi Ceremony",
  "Baraat",
  "Pre-wedding Shoots",
  "Engagements",
  "Anniversary",
  "Baby Showers",
  "Outdoor Shoots",
  "Candid Moments"
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  const handleWhatsAppBooking = () => {
    const message = `Hi Mahesh! I'm interested in booking your photography services.`;
    const whatsappUrl = `https://wa.me/919949546867?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-white mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of timeless moments captured with passion and precision.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <div 
                  className="relative group cursor-pointer h-full"
                  onClick={() => setSelectedItem(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.category}</p>
                      {item.isVideo && (
                        <Play className="w-12 h-12 text-white mx-auto mt-4" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Book Us Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button 
            onClick={handleWhatsAppBooking}
            className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
          >
            Book Your Special Day
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              {selectedItem.isVideo ? (
                <video
                  src={selectedItem.videoUrl}
                  controls
                  className="w-full h-full object-contain"
                  autoPlay
                  playsInline
                />
              ) : (
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-2xl font-semibold">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio; 