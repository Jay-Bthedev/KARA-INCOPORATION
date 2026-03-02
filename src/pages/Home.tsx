import Hero from '../sections/Hero';
import About from '../sections/About';
import AIAutomations from '../sections/AIAutomations';
import Testimonials from '../sections/Testimonials';
import Newsletter from '../sections/Newsletter';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="pt-16 md:pt-20">
      <Hero />
      <About />
      <AIAutomations />
      <Testimonials />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Home;
