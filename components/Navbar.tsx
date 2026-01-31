import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Karya', href: '#work' },
    { name: 'Layanan', href: '#services' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-zinc-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
              rioadrian<span className="text-blue-600">.dev</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="w-px h-6 bg-slate-200 dark:bg-zinc-800 mx-4"></div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-500 dark:text-zinc-400 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 animate-fade-in shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 px-3 py-4 mt-4 border-t border-slate-100 dark:border-zinc-900">
               <button onClick={toggleTheme} className="flex items-center text-slate-600 dark:text-zinc-400">
                  {theme === 'dark' ? <Sun size={20} className="mr-2"/> : <Moon size={20} className="mr-2"/>}
                  {theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;