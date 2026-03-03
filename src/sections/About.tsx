import { Target, Rocket, Users, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Tech Education',
      description: 'Accessible learning programs for all skill levels',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Guidance from industry experts and leaders',
    },
    {
      icon: Target,
      title: 'Real-world Application',
      description: 'Practical skills that drive results',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kara-dark mb-4">
            About KARA INCORPORATION
          </h2>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6 py-4 w-full'>
          <img src='/karapic9.png' alt='logo' className='w-full max-w-[350px] object-cover' />
<img src='/karapic3.jpg' alt='logo' className='w-full max-w-[350px] object-cover rounded-full' />
          </div>
          <p className="text-lg text-kara-brown font-medium">
            How we help you?
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-kara-cream hover:shadow-soft transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-kara-brown/10 flex items-center justify-center group-hover:bg-kara-brown group-hover:text-white transition-all duration-300">
                <feature.icon className="w-8 h-8 text-kara-brown group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-kara-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-kara-dark/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-kara-brown to-kara-brown/80 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-kara-tan" />
                <h3 className="text-2xl font-bold">Mission</h3>
                <span className="text-2xl">😎🎉🤎🤎</span>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                We empower learners globally by bridging knowledge and real-world application 
                through accessible tech education, mentorship, and inclusive support—transforming 
                potential into leadership and innovation.
              </p>
              <p className="mt-4 text-kara-tan font-medium">
                It's all God speed!
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-kara-tan to-kara-tan/80 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-kara-dark" />
                <h3 className="text-2xl font-bold">Vision</h3>
                <span className="text-2xl">🚀🌍</span>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                To be the catalyst for a tech-driven future where every individual thrives 
                as a compassionate, skilled leader, reshaping industries and communities 
                through education and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
