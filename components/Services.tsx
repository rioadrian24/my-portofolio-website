import React from 'react';
import { Layout, Smartphone, Zap, Search, PenTool, Database, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'Membangun antarmuka web yang responsif dan presisi menggunakan React, Next.js, dan Tailwind CSS. Fokus pada aksesibilitas dan UX.',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Backend Integration',
    description: 'Pengembangan API yang handal dan manajemen basis data. Berpengalaman dengan Node.js, PHP, dan arsitektur Serverless.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Aplikasi Mobile',
    description: 'Pengembangan aplikasi mobile lintas platform. Memastikan performa mulus di perangkat Android dan iOS.',
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Pengembangan Kurikulum',
    description: 'Merancang materi pembelajaran IT dan modul ajar yang sesuai dengan standar industri terkini (Link and Match).',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Optimasi Performa',
    description: 'Mengoptimalkan aplikasi web untuk kecepatan dan efisiensi. Meningkatkan Core Web Vitals dan strategi loading.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Konsultasi IT',
    description: 'Memberikan solusi teknis untuk kebutuhan bisnis, mulai dari pemilihan teknologi hingga strategi deployment.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4 text-blue-600 dark:text-blue-400">
            <Cloud size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Layanan & Keahlian
          </h2>
          <p className="text-lg text-slate-600 dark:text-zinc-400">
            Solusi digital komprehensif yang disesuaikan dengan kebutuhan Anda. 
            Dari pengembangan sistem hingga edukasi teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-900/10"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-24 h-24" })}
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;