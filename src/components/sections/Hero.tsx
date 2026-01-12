import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Github, Linkedin } from 'lucide-react';

interface HeroProps {
    scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mb-32 md:mb-48">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Badge className="mb-6 py-2 px-6 bg-white/5 border-white/10 text-purple-400 backdrop-blur-md font-bold tracking-widest uppercase border-purple-500/20">
                            <Sparkles size={14} className="mr-2 text-purple-400" /> IOS DEVELOPER
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.85]"
                    >
                        CODE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500">DESIGN.</span>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mb-12">
                        <img
                            src="/ben.webp"
                            alt="Ece Akçay Portrait"
                            loading="eager"
                            fetchPriority="high"
                            width="192"
                            height="192"
                            className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/40 transition-all hover:scale-105 duration-500"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed italic"
                    >
                        Developing high-performance and aesthetic iOS solutions, pushing the boundaries within the Apple ecosystem.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center gap-6">
                        <Button size="lg" onClick={() => scrollToSection('projects')} className="h-16 px-10 rounded-2xl bg-purple-600 text-white font-black text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:bg-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all transform hover:scale-105">
                            VIEW PROJECTS <ArrowRight className="ml-2" />
                        </Button>
                        <div className="flex gap-4">
                            <a href="https://github.com/eceakcay" target="_blank" rel="noopener noreferrer">
                                <button className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all group shadow-xl">
                                    <Github size={24} className="text-white group-hover:text-purple-400 transition-colors" />
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/ece-ak%C3%A7ay-388721299/" target="_blank" rel="noopener noreferrer">
                                <button className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all group shadow-xl">
                                    <Linkedin size={24} className="text-white group-hover:text-purple-400 transition-colors" />
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
