import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, MapPin, Phone, User, MessageSquare, Clock } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const eventTypes = [
  "Wedding",
  "Pre-Wedding",
  "Reception",
  "Haldi",
  "Sangeet",
  "Mehendi",
  "Baraat",
  "Engagement",
  "Baby Shower",
  "Anniversary",
  "Outdoor Couple Shoot",
  "Birthday",
  "Other"
];

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    startTime: '10:00',
    endTime: '18:00',
    location: '',
    message: '',
    selectedEvents: [] as string[]
  });

  const handleEventToggle = (event: string) => {
    setFormData(prev => ({
      ...prev,
      selectedEvents: prev.selectedEvents.includes(event)
        ? prev.selectedEvents.filter(e => e !== event)
        : [...prev.selectedEvents, event]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const message = `
Hello Mahesh!

I would like to book your photography services:

Name: ${formData.name}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Time: ${formData.startTime} to ${formData.endTime}
Location: ${formData.location}
Events: ${formData.selectedEvents.join(', ')}

Additional Message:
${formData.message}
    `.trim();

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919949546867?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
      style={{ paddingTop: '5rem' }} // Add padding to account for the navbar
    >
      <div className="min-h-screen flex items-start justify-center p-4">
        <div className="relative bg-gray-900 rounded-2xl max-w-2xl w-full p-8 my-8">
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-elegant text-gold mb-6">Book Your Event</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute top-3 left-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute top-3 left-3 text-gray-400" size={20} />
                  <input
                    type="date"
                    required
                    className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    value={formData.eventDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  />
                </div>

                {/* Time Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Clock className="absolute top-3 left-3 text-gray-400" size={20} />
                    <input
                      type="time"
                      required
                      className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                      value={formData.startTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, startTime: e.target.value }))}
                    />
                    <span className="absolute top-3 right-3 text-gray-400">Start</span>
                  </div>

                  <div className="relative">
                    <Clock className="absolute top-3 left-3 text-gray-400" size={20} />
                    <input
                      type="time"
                      required
                      className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                      value={formData.endTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value }))}
                    />
                    <span className="absolute top-3 right-3 text-gray-400">End</span>
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="absolute top-3 left-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Event Location (City / Venue)"
                    required
                    className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>
              </div>

              {/* Event Types */}
              <div>
                <h3 className="text-white text-lg mb-3">Select Event Types</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {eventTypes.map((event) => (
                    <label
                      key={event}
                      className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.selectedEvents.includes(event)
                          ? 'bg-gold text-black'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.selectedEvents.includes(event)}
                        onChange={() => handleEventToggle(event)}
                      />
                      <span>{event}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute top-3 left-3 text-gray-400" size={20} />
                <textarea
                  placeholder="Additional Message (Optional)"
                  className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-gold outline-none min-h-[100px]"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
              >
                Send Booking Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingForm; 