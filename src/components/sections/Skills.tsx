import React from 'react';
import { Smartphone, Layers } from 'lucide-react';
import { skills } from '@/data/portfolioData';

const Skills: React.FC = () => {
    return (
        <section id="beceriler" className="py-32 bg-black/40">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-black text-white tracking-tighter mb-4 uppercase italic">Technical <span className="text-purple-500">Skills</span></h2>
                    <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-600/20 to-transparent border border-white/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-purple-500/50 transition-all shadow-2xl">
                        <Smartphone size={48} className="text-purple-400 mb-8" />
                        <div>
                            <h3 className="text-3xl font-black text-white mb-2 italic uppercase">iOS Development</h3>
                            <p className="text-sm text-slate-400 font-medium">Expertise in Swift, SwiftUI, UIKit, and Apple SDKs for enterprise-level development.</p>
                        </div>
                    </div>

                    {skills.map((skill, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-[32px] p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all group">
                            <skill.icon size={32} className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
                            <span className="font-bold text-xs tracking-widest uppercase text-center">{skill.name}</span>
                        </div>
                    ))}

                    <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-[32px] p-8 flex items-center gap-6 hover:border-purple-500 transition-all">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                            <Layers className="text-purple-400" />
                        </div>
                        <div>
                            <h3 className="font-black text-white italic tracking-tighter text-xl uppercase">MVVM Expert</h3>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Scalable & Maintainable Architecture</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
