import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blogs-and-edu-resources', label: 'Blogs and Edu. Resources' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/606422895883152', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/SHOPWITHKARATECH', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kara-incorporation-130008361', label: 'LinkedIn' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-kara-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-kara-dark'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-semibold tracking-wider text-white">
              KARA<span className="text-kara-tan">CORP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-kara-tan'
                    : 'text-white/80 hover:text-kara-tan'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-kara-tan transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-kara-dark/98 backdrop-blur-md px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-sm tracking-widest uppercase py-2 ${
                location.pathname === link.path
                  ? 'text-kara-tan'
                  : 'text-white/80 hover:text-kara-tan'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-kara-tan transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
