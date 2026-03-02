import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-kara-brown">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-kara-tan" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sign up for our Newsletter
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Stay updated with the latest news, resources, and insights from KARA INCORPORATION.
            Join our community of learners and innovators.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-kara-dark/40" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-white border-0 text-kara-dark placeholder:text-kara-dark/40"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 px-6 bg-kara-tan hover:bg-kara-tan/90 text-kara-dark font-medium"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-kara-dark/30 border-t-kara-dark rounded-full animate-spin" />
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Subscribe
                    </span>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-kara-tan" />
              <span className="text-lg">Thank you for subscribing!</span>
            </div>
          )}

          {/* Privacy Note */}
          <p className="mt-4 text-sm text-white/50">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
