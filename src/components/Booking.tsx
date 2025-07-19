import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

interface BookingForm {
  name: string;
  phone: string;
  eventDate: string;
  eventLocation: string;
  message: string;
  eventTypes: string[];
}

const eventTypeOptions = [
  "Wedding",
  "Pre-Wedding",
  "Reception",
  "Haldi",
  "Sangeet",
  "Engagement",
  "Baby Shower",
  "Outdoor Couple Shoot",
  "Birthday",
  "Other"
];

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    message: '',
    eventTypes: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventTypeChange = (eventType: string) => {
    setFormData(prev => ({
      ...prev,
      eventTypes: prev.eventTypes.includes(eventType)
        ? prev.eventTypes.filter(type => type !== eventType)
        : [...prev.eventTypes, eventType]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message
    const message = `*New Booking Request - mr.photo*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Event Date:* ${formData.eventDate}
*Event Location:* ${formData.eventLocation}
*Event Types:* ${formData.eventTypes.join(', ')}
*Message:* ${formData.message}

Thank you for choosing mr.photo! We'll get back to you soon.`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      eventDate: '',
      eventLocation: '',
      message: '',
      eventTypes: []
    });

    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-white mb-6">
            Book Your Special Day
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's create beautiful memories together. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-white font-medium mb-2">Event Date *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Event Location */}
              <div>
                <label className="block text-white font-medium mb-2">Event Location *</label>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="City / Venue"
                />
              </div>
            </div>

            {/* Event Types */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-4">Event Types (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {eventTypeOptions.map((eventType) => (
                  <label key={eventType} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.eventTypes.includes(eventType)}
                      onChange={() => handleEventTypeChange(eventType)}
                      className="w-4 h-4 text-gold bg-gray-800 border-gray-700 rounded focus:ring-gold focus:ring-2"
                    />
                    <span className="text-white text-sm">{eventType}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-2">Additional Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us about your special day, any specific requirements, or questions you might have..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Booking Request</span>
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 XXXXXXXXXX</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <Mail className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">hello@mrphoto.in</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Hyderabad, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking; 