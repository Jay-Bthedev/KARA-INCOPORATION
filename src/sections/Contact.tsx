import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-kara-cream">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kara-dark mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-kara-dark/70">
            Better yet, see us in person!
          </p>
          <p className="text-kara-dark/60 mt-2">
            We love our customers, so feel free to visit during normal business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-kara-dark mb-6">
                KARA INCORPORATION
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-kara-brown/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-kara-brown" />
                  </div>
                  <div>
                    <p className="text-kara-dark font-medium">Address</p>
                    <p className="text-kara-dark/70">
                      MFM5+H6J, Ede 232101, Osun, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-kara-brown/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-kara-brown" />
                  </div>
                  <div>
                    <p className="text-kara-dark font-medium">Phone</p>
                    <a
                      href="tel:08100252773"
                      className="text-kara-brown hover:underline"
                    >
                      08100252773
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-kara-brown/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-kara-brown" />
                  </div>
                  <div>
                    <p className="text-kara-dark font-medium">Hours</p>
                    <p className="text-kara-dark/70">Open today: 09:00 – 17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-kara-dark font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/2348100252773"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline flex items-center gap-1"
                    >
                      Instant WhatsApp chat
                      <span className="text-green-500">✅</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-soft h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.8!2d4.45!3d7.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnMDAuMCJOIDTCsDI3JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1609459200000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KARA INCORPORATION Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft">
            <h3 className="text-2xl font-semibold text-kara-dark mb-2">
              Drop us a line!
            </h3>
            <p className="text-kara-dark/60 mb-8">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-kara-dark mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-kara-dark mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-kara-dark mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-kara-brown hover:bg-kara-brown/90 text-white font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-kara-dark mb-2">
                  Message Sent!
                </h4>
                <p className="text-kara-dark/60">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
