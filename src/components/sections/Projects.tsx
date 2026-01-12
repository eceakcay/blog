import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolioData';

const Projects: React.FC = () => {
    return (
        <section id="projeler" className="py-32">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-20">
                    <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic underline decoration-purple-600 decoration-4">Selected Works.</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div key={idx} whileHover={{ y: -20 }} className="group">
                            <div className={`relative h-[480px] rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-b ${project.color} p-1 transition-all group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
                                <div className="absolute inset-0 bg-[#0a0a0a] rounded-[39px] transition-all group-hover:opacity-90" />

                                <div className="relative h-full p-10 flex flex-col">
                                    <span className="text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase mb-4 italic">{project.category}</span>
                                    <h3 className="text-4xl font-black text-white mb-6 leading-tight group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 font-bold italic mb-8 flex-1 leading-relaxed">"{project.desc}"</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300 font-bold uppercase tracking-widest">{t}</span>
                                        ))}
                                    </div>

                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="self-end">
                                        <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:bg-purple-600 transition-all rotate-[-15deg] group-hover:rotate-0 shadow-xl">
                                            <ExternalLink size={24} className="text-black" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
