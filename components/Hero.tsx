import React from 'react';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Tersedia untuk proyek baru
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
            Berawal dari rasa ingin tahu, berkembang menjadi karya
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              &nbsp;digital.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Halo, saya <strong className="text-slate-900 dark:text-white">Rio Adrian</strong>. Fullstack Web Developer dan Pendidik yang menggabungkan keahlian teknis industri dengan passion dalam pendidikan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button withIcon onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})}>
              Lihat Karya Saya
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Hubungi Saya
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400 dark:text-zinc-600">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;