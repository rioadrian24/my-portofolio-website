import React from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, GraduationCap } from 'lucide-react';

// Menggabungkan Pengalaman Kerja dan Pendidikan dalam satu timeline agar kronologis
interface TimelineItem extends ExperienceItem {
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    role: "Kepala Jurusan PPLG",
    company: "SMK Bina Mandiri Multimedia",
    period: "Juli 2024 - Sekarang",
    description: "Memimpin pengembangan kurikulum jurusan Pengembangan Perangkat Lunak dan Gim (PPLG), mengelola tenaga pengajar, dan meningkatkan kualitas lulusan agar siap industri."
  },
  {
    id: 2,
    type: 'education',
    role: "S1 Sistem Informasi",
    company: "STMIK Pranata Indonesia",
    period: "2021 - 2025",
    description: "Mendalami analisis sistem, manajemen basis data, dan pengembangan perangkat lunak skala enterprise."
  },
  {
    id: 3,
    type: 'work',
    role: "Guru Produktif Jurusan PPLG",
    company: "SMK Bina Mandiri Multimedia",
    period: "Agustus 2021 - Sekarang",
    description: "Mengajar mata pelajaran produktif PPLG, membimbing siswa dalam proyek coding, dan mempersiapkan siswa untuk sertifikasi kompetensi."
  },
  {
    id: 4,
    type: 'work',
    role: "Remote Fullstack Web Developer",
    company: "PT. Terrakon Properti",
    period: "Januari 2019 - Desember 2025",
    description: "Bertanggung jawab atas pengembangan dan pemeliharaan website perusahaan serta sistem internal secara remote selama lebih dari 6 tahun."
  },
  {
    id: 5,
    type: 'education',
    role: "Siswa (Jurusan Rekayasa Perangkat Lunak)",
    company: "SMK Bina Mandiri Multimedia",
    period: "2018 - 2021",
    description: "Lulus dengan kompetensi di bidang multimedia, desain grafis, dan dasar pemrograman web."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4 text-blue-600 dark:text-blue-400">
             <Briefcase size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Pengalaman & Pendidikan</h2>
        </div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative pl-12 md:pl-0">
              
              {/* Timeline Lines */}
              {index !== timelineData.length - 1 && (
                <>
                  {/* Mobile Line (Left Aligned) */}
                  <div className="absolute left-4 top-8 bottom-[-48px] w-px bg-slate-200 dark:bg-zinc-800 md:hidden"></div>
                  {/* Desktop Line (Center Aligned) */}
                  <div className="hidden md:block absolute left-1/2 -ml-px top-8 bottom-[-48px] w-px bg-slate-200 dark:bg-zinc-800"></div>
                </>
              )}
              
              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Timeline Dot & Icon */}
                {/* Mobile: Left aligned at 0 (center of 32px relative to 16px line). Desktop: Center aligned */}
                <div className={`absolute left-0 top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center md:left-1/2 md:-ml-4 z-10 transition-colors bg-white dark:bg-zinc-950 ${
                  item.type === 'work' 
                    ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300' 
                    : 'border-emerald-500 text-emerald-600 dark:border-emerald-400 dark:text-emerald-300'
                }`}>
                  {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                </div>

                {/* Period/Date Display */}
                <div className="md:w-[45%] mb-2 md:mb-0 pt-1">
                  <div className={`text-sm font-semibold ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-left ${
                    item.type === 'work' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {item.period}
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="md:w-[45%]">
                  <div className={`p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors shadow-sm ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                    <div className="text-slate-500 dark:text-zinc-500 font-medium mb-3">{item.company}</div>
                    <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;