import { Check, TrendingUp, AlertCircle, Zap } from 'lucide-react';

const AIAutomations = () => {
  const advantages = [
    'End-to-end integration, not fragmented tools',
    'Customized for your business niche',
    'Affordable pricing for small budgets',
    'Local expertise with global standards',
  ];

  const problems = [
    'Waking up at 4:30 AM to manage operations',
    'Cooking, managing workers, taking orders',
    'Recording expenses and responding to messages',
    'Trying to post on social media for more customers',
  ];

  return (
    <section className="py-20 md:py-28 bg-kara-cream">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kara-dark mb-4">
            KARA AI AUTOMATIONS AND TRAINING
          </h2>
          <p className="text-lg text-kara-brown">
            CLICK ON THE IMAGE TO LEARN MORE
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-kara-dark rounded-2xl p-8 md:p-10 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-kara-tan" />
          </div>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            45 million SMEs across Africa valued at $1.3 trillion. 
            <span className="text-kara-tan"> AI adoption in small business projected to grow 28% annually through 2024.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Advantage */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-kara-brown/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-kara-brown" />
              </div>
              <h3 className="text-2xl font-bold text-kara-dark">Our Advantage</h3>
            </div>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kara-brown/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-kara-brown" />
                  </div>
                  <span className="text-kara-dark/80">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Problem */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-kara-dark">The Problem: Manual Operations Hold Back Growth</h3>
            </div>
            <p className="text-kara-dark/70 mb-4">
              Small business owners like Iya Shukura, who sells fried rice and chicken near the university gate, wake up at 4:30 AM.
            </p>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-kara-tan flex-shrink-0 mt-2"></div>
                  <span className="text-kara-dark/70">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-kara-brown text-white font-medium rounded-lg hover:bg-kara-brown/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAutomations;
