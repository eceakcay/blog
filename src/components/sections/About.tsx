import React from 'react';

const About: React.FC = () => {
    return (
        <section id="hakkimda" className="py-32">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase italic">Turning Ideas into <span className="text-purple-500">Products.</span></h2>
                    <p className="text-lg text-slate-400 mb-6 leading-relaxed font-medium italic">
                        My passion for technology comes to life in the world of Swift and SwiftUI. With experience gained in corporate projects, I design modular architectures to elevate the user experience.
                    </p>
                    <div className="space-y-4 pt-4">
                        {['MVVM & Clean Architecture Specialist', 'iOS (UIKit & SwiftUI) Development', '.NET 8 / ASP.NET Core Backend Skills'].map(item => (
                            <div key={item} className="flex items-center gap-3 text-white font-bold tracking-tight">
                                <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[30px] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="bg-white/5 p-4 border-b border-white/10 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">AboutMe.swift</span>
                        </div>
                        <div className="p-8 font-mono text-sm leading-relaxed">
                            <p className="text-purple-400">struct <span className="text-white">Developer</span> {"{"}</p>
                            <p className="pl-6 text-slate-400">let name = <span className="text-emerald-400">"Ece Akçay"</span></p>
                            <p className="pl-6 text-slate-400">var role = <span className="text-emerald-400">"iOS Developer"</span></p>
                            <p className="pl-6 text-slate-400">var skills = [<span className="text-emerald-400">"SwiftUI", "UIKit", ".NET"</span>]</p>
                            <br />
                            <p className="pl-6 text-purple-400">func <span className="text-blue-400">buildFuture</span>() {"{"}</p>
                            <p className="pl-12 text-slate-400">while !success {"{"} code() {"}"}</p>
                            <p className="pl-6 text-purple-400">{"}"}</p>
                            <p className="text-purple-400">{"}"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
