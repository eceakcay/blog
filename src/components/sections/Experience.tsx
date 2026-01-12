import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/data/portfolioData';

const Experience: React.FC = () => {
    return (
        <section id="deneyim" className="py-32 bg-white/[0.01] relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-black text-white tracking-tighter mb-4 uppercase italic">
                        Career <span className="text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Journey</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
                </div>

                <div className="space-y-16 relative">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-purple-500/20 hidden md:block" />

                    {experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="absolute left-[-9px] md:left-1/2 md:ml-[-5px] top-10 w-3 h-3 bg-purple-400 rounded-full z-10 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

                            <div className="w-full md:w-1/2">
                                <div className="group bg-[#0a0a0a] border border-purple-500/30 p-10 rounded-[40px] hover:border-purple-400 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
                                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-[80px]" />
                                    <div className="relative z-10">
                                        <div className="inline-block mb-6 px-5 py-2 rounded-xl bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                            <span className="text-black font-black text-xs uppercase tracking-[0.2em]">
                                                {exp.date}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-xl font-bold text-purple-400 mb-8 flex items-center gap-3 uppercase tracking-tighter">
                                            <span className="w-8 h-1 bg-purple-500" /> {exp.company}
                                        </h4>
                                        <p className="text-white text-[16px] leading-[1.8] font-bold opacity-100 italic tracking-tight">
                                            {exp.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
