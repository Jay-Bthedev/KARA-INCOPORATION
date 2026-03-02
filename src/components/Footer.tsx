import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/606422895883152', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/SHOPWITHKARATECH', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kara-incorporation-130008361', label: 'LinkedIn' },
    { icon: Music, href: 'https://www.tiktok.com/@karaincorporation', label: 'TikTok' },
  ];

  const footerLinks = [
    { path: '/blogs-and-edu-resources', label: 'Blogs and Edu. Resources' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-and-conditions', label: 'Terms and Conditions' },
  ];

  return (
    <footer className="bg-kara-dark text-white">
      {/* Partners Section */}
      <div className="border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
          <h3 className="text-center text-lg font-medium text-kara-tan mb-6">
            Our Partners
          </h3>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            {/* Partner placeholders - can be replaced with actual partner logos */}
            <div className="w-16 h-8 bg-white/20 rounded"></div>
            <div className="w-16 h-8 bg-white/20 rounded"></div>
            <div className="w-16 h-8 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-wider">
                KARA<span className="text-kara-tan">CORP</span>
              </span>
            </Link>
            <p className="mt-2 text-white/60 text-sm">
              Let's help you live it!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-white/70 hover:text-kara-tan transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-kara-tan hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <p className="text-center text-sm text-white/50">
            Copyright © {currentYear} KARA INCORPORATION - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
