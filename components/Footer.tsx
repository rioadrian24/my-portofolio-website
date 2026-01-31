import React from 'react';
import { Mail, MapPin, Twitter, Linkedin, Github, Heart } from 'lucide-react';
import { Button } from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 dark:bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari bangun sesuatu yang hebat bersama.</h2>
          <p className="text-slate-400 text-lg mb-10">
            Saat ini tersedia untuk proyek freelance, konsultasi pendidikan, dan kerjasama industri.
          </p>
          <Button variant="secondary" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white border-none">
            Halo Rio <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <span className="text-2xl font-bold tracking-tighter text-white mb-2">
              rio<span className="text-blue-500">.dev</span>
            </span>
            <div className="flex items-center text-slate-400 text-sm">
              <MapPin size={16} className="mr-2" /> Indonesia (Remote)
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-slate-600 text-sm flex items-center justify-center">
          <p>© {new Date().getFullYear()} Rio Adrian. Dibuat dengan </p>
          <Heart size={12} className="mx-1 text-red-500 fill-red-500" />
          <p>menggunakan React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;