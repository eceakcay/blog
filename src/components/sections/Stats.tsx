import React from 'react';
import { stats } from '@/data/portfolioData';

const Stats: React.FC = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.01] relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center group">
                            <div className="relative inline-block mb-3">
                                <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <stat.icon size={28} className="relative z-10 mx-auto text-purple-400 brightness-150 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-all duration-300" />
                            </div>
                            <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter transition-transform group-hover:text-purple-300">
                                {stat.value}
                            </h4>
                            <p className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500 group-hover:text-purple-400 transition-colors mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
