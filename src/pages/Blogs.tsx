import { useState } from 'react';
import { Download, BookOpen, FileText, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blogs = () => {
  const [activeTab, setActiveTab] = useState<'pdfs' | 'pqs' | 'blogs'>('pdfs');

  const pdfResources = [
    {
      title: 'Attitude is Everything',
      author: 'Keith Harrell',
      type: 'pdf',
      description: 'Transform your attitude, transform your life',
    },
    {
      title: 'The Power of Your Leadership',
      author: 'John C. Maxwell',
      type: 'pdf',
      description: 'Making a Difference with Others',
    },
    {
      title: 'The Lean Startup',
      author: 'Eric Ries',
      type: 'pdf',
      description: 'How to build a successful startup',
    },
    {
      title: 'Zero to One',
      author: 'Peter Thiel',
      type: 'pdf',
      description: 'Notes on Startups, or How to Build the Future',
    },
    {
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      type: 'pdf',
      description: 'The classic guide to personal success',
    },
    {
      title: 'Built to Last',
      author: 'Jim Collins',
      type: 'pdf',
      description: 'Successful Habits of Visionary Companies',
    },
  ];

  const pqResources = [
    {
      title: 'CSC 252 PQ',
      course: 'Computer Science',
      type: 'pdf',
      description: 'Past questions for CSC 252',
    },
  ];

  const blogPosts = [
    {
      title: 'I tried the HONOR Magic V6 — now Samsung and Google foldables feel ancient',
      excerpt: 'What makes a great foldable Android phone? For me, it\'s one that checks a few different boxes...',
      date: '1 March 2026',
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&h=400&fit=crop',
      link: 'https://www.androidauthority.com/honor-magic-v6-review-3637543/',
    },
    {
      title: 'This new foldable defies logic by packing the biggest battery in the slimmest body',
      excerpt: 'HONOR has revealed the Magic V6 foldable with a massive 6,660mAh silicon-carbon battery...',
      date: '1 March 2026',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop',
      link: 'https://www.androidauthority.com/honor-magic-v6-battery-3637543/',
    },
    {
      title: 'Fewer cameras can be better, and this phone proves it',
      excerpt: 'I can\'t get enough of new camera technology, so I was eager to try out the new Xiaomi...',
      date: '1 March 2026',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
      link: 'https://www.androidauthority.com/xiaomi-17-ultra-zoom-camera-3637543/',
    },
    {
      title: 'With the Pixel 11, Google needs to admit it has a hardware problem',
      excerpt: 'Google is coming out of one of the greatest smartphone design runs of all time...',
      date: '1 March 2026',
      image: 'https://images.unsplash.com/photo-1598327775663-22bbd4c7c2f9?w=600&h=400&fit=crop',
      link: 'https://www.androidauthority.com/google-pixel-hardware-problem-3643891/',
    },
    {
      title: 'This Google TV projector is the nightstand accessory I didn\'t know I needed',
      excerpt: 'The scariest part of watching horror movies isn\'t on screen, it\'s the walk around my bed afterward...',
      date: '1 March 2026',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop',
      link: 'https://www.androidauthority.com/benq-gv32-review-3644032/',
    },
    {
      title: 'I love Spotify, but its Android app still gets one thing wrong',
      excerpt: 'Judging by the sentiment shared by my colleagues, I\'m probably the only person...',
      date: '1 March 2026',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop',
      link: 'https://www.androidauthority.com/spotify-shortcuts-gestures-android-3644492/',
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-kara-light min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kara-dark mb-4">
            Blogs and Edu. Resources
          </h1>
          <p className="text-lg text-kara-dark/70 max-w-2xl mx-auto">
            Expand your knowledge with our curated collection of resources, past questions, and tech insights.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-soft">
            <button
              onClick={() => setActiveTab('pdfs')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'pdfs'
                  ? 'bg-kara-brown text-white'
                  : 'text-kara-dark/70 hover:text-kara-dark'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                PDF Resources
              </span>
            </button>
            <button
              onClick={() => setActiveTab('pqs')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'pqs'
                  ? 'bg-kara-brown text-white'
                  : 'text-kara-dark/70 hover:text-kara-dark'
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                KARA PQs
              </span>
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'blogs'
                  ? 'bg-kara-brown text-white'
                  : 'text-kara-dark/70 hover:text-kara-dark'
              }`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Tech Blogs
              </span>
            </button>
          </div>
        </div>

        {/* PDF Resources */}
        {activeTab === 'pdfs' && (
          <div className="animate-fade-in">
            <div className="bg-kara-brown rounded-2xl p-8 md:p-10 mb-8 text-center">
              <BookOpen className="w-12 h-12 text-kara-tan mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                PDF RESOURCES
              </h2>
              <p className="text-white/80 text-lg italic">
                "...In a generation full of mediocre's just a little reading would set you apart" ✨🤎
              </p>
              <p className="text-kara-tan mt-2">~Kara</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-kara-brown/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-kara-brown" />
                    </div>
                    <span className="text-xs font-medium text-kara-dark/50 uppercase">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-kara-dark mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-kara-dark/60 mb-2">by {resource.author}</p>
                  <p className="text-sm text-kara-dark/70 mb-4">
                    {resource.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-kara-brown text-kara-brown hover:bg-kara-brown hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KARA PQs */}
        {activeTab === 'pqs' && (
          <div className="animate-fade-in">
            <div className="bg-kara-tan rounded-2xl p-8 md:p-10 mb-8 text-center">
              <FileText className="w-12 h-12 text-kara-dark mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-kara-dark mb-4">
                KARA PQs
              </h2>
              <p className="text-kara-dark/80 text-lg">
                Tests and exams are going to be a breeze with our meticulously sorted Academic resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pqResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-kara-tan/20 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-kara-tan" />
                    </div>
                    <span className="text-xs font-medium text-kara-dark/50 uppercase">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-kara-dark mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-kara-dark/60 mb-2">{resource.course}</p>
                  <p className="text-sm text-kara-dark/70 mb-4">
                    {resource.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-kara-tan text-kara-tan hover:bg-kara-tan hover:text-kara-dark"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts */}
        {activeTab === 'blogs' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kara-dark/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-1 text-xs text-white/80">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-kara-dark mb-3 line-clamp-2 group-hover:text-kara-brown transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-kara-dark/70 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-kara-brown group-hover:underline">
                      Continue Reading
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
