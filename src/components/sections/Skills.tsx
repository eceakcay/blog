import React from 'react';
import { skills } from '@/data/portfolioData';

const Skills: React.FC = () => {
    return (
        <section id="beceriler" className="py-20 bg-black/40">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase italic">Technical <span className="text-purple-500">Skills</span></h2>
                    <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="min-h-28 bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all group">
                            <skill.icon size={28} className={`${skill.color} mb-3 group-hover:scale-110 transition-transform`} />
                            <span className="font-bold text-[11px] tracking-wider uppercase text-center">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
