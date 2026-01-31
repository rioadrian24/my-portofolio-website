import React from 'react';
import { ExternalLink, Github, Code2, Globe, Database } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Manajemen Properti",
    description: "Dashboard analitik komprehensif untuk pengelolaan aset properti real-time (Studi Kasus: PT. Terrakon Properti).",
    imageUrl: "https://picsum.photos/800/600?random=1",
    tags: ["Laravel", "Vue.js", "MySQL", "Rest API"],
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "E-Learning PPLG",
    description: "Platform pembelajaran interaktif untuk siswa jurusan PPLG dengan fitur kuis dan tracking progres.",
    imageUrl: "https://picsum.photos/800/600?random=2",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "#",
    featured: false
  },
  {
    id: 3,
    title: "Sistem Informasi Akademik",
    description: "Aplikasi berbasis web untuk pengelolaan data siswa, guru, dan nilai secara terintegrasi.",
    imageUrl: "https://picsum.photos/800/600?random=3",
    tags: ["PHP", "CodeIgniter", "Bootstrap"],
    link: "#",
    featured: false
  },
  {
    id: 4,
    title: "Portofolio Guru Kreatif",
    description: "Template website untuk tenaga pengajar menampilkan karya dan materi ajar.",
    imageUrl: "https://picsum.photos/800/600?random=4",
    tags: ["Next.js", "TypeScript", "Vercel"],
    link: "#",
    featured: true
  }
];

const BentoCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  title?: string;
  subtitle?: string;
}> = ({ children, className = "", title, subtitle }) => (
  <div className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 transition-all hover:shadow-xl dark:hover:shadow-zinc-900/50 ${className}`}>
    {children}
    {(title || subtitle) && (
      <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-white/90 via-white/50 to-transparent dark:from-zinc-900/95 dark:via-zinc-900/50 pt-20">
        {subtitle && <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{subtitle}</p>}
        {title && <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>}
      </div>
    )}
  </div>
);

const BentoGrid: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-slate-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Karya Terpilih</h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl">
            Kurasi proyek yang telah saya kerjakan, mulai dari sistem perusahaan properti hingga aplikasi pendidikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* Main Featured Project - Large */}
          <BentoCard className="md:col-span-2 md:row-span-2 group cursor-pointer">
            <img 
              src={projects[0].imageUrl} 
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex gap-2 mb-3">
                {projects[0].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-md text-white border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{projects[0].title}</h3>
              <p className="text-slate-200 mb-4 max-w-md">{projects[0].description}</p>
              <a href={projects[0].link} className="inline-flex items-center text-white font-medium hover:underline">
                Lihat Proyek <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </BentoCard>

          {/* Stats/About Block - Small */}
          <BentoCard className="md:col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 border-none text-white flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-bold mb-2">6+</div>
            <div className="text-blue-100 font-medium">Tahun Pengalaman</div>
          </BentoCard>

          {/* Tech Stack - Tall */}
          <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Tech Stack</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Frontend</div>
                  <div className="text-xs text-slate-500 dark:text-zinc-500">React, Next.js, Tailwind, Bootstrap, Flutter</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <Database size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Backend</div>
                  <div className="text-xs text-slate-500 dark:text-zinc-500">PHP, Laravel, Dart</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Deployment</div>
                  <div className="text-xs text-slate-500 dark:text-zinc-500">VPS, cPanel, Vercel</div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Project 2 */}
          <BentoCard className="md:col-span-1 group">
             <div className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white">
               <Github size={16} />
             </div>
             <img 
              src={projects[1].imageUrl} 
              alt={projects[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="font-bold text-lg">{projects[1].title}</h3>
              <p className="text-xs text-slate-300 line-clamp-2">{projects[1].description}</p>
            </div>
          </BentoCard>

          {/* Project 3 */}
          <BentoCard className="md:col-span-1 group">
             <img 
              src={projects[2].imageUrl} 
              alt={projects[2].title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="font-bold text-lg">{projects[2].title}</h3>
            </div>
          </BentoCard>

           {/* See Github Link */}
           <BentoCard className="md:col-span-1 bg-zinc-950 dark:bg-zinc-100 flex items-center justify-center group cursor-pointer border-none">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-center group-hover:scale-105 transition-transform">
                <Github size={48} className="mx-auto mb-4 text-white dark:text-black" />
                <span className="font-bold text-white dark:text-black block">GitHub Saya</span>
                <span className="text-zinc-400 dark:text-zinc-600 text-sm">Lihat kode lainnya</span>
              </a>
           </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;