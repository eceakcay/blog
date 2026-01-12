import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="iletisim" className="pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase italic">
                    LET'S <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,1)] brightness-125 contrast-125">CONNECT.</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
                    {/* Email */}
                    <a href="mailto:eceakcay.36@gmail.com" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-purple-500/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Mail size={40} className="mx-auto mb-4 text-[#0077B5] brightness-150 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" />
                        <p className="font-black text-white uppercase text-[10px] tracking-[0.2em] group-hover:text-purple-400 transition-colors">Email</p>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ece-ak%C3%A7ay-388721299/" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-purple-500/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Linkedin size={40} className="mx-auto mb-4 text-[#0077B5] brightness-150 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" />
                        <p className="font-black text-white uppercase text-[10px] tracking-[0.2em] group-hover:text-purple-400 transition-colors">LinkedIn</p>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/eceakcay" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-purple-500/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Github size={40} className="mx-auto mb-4 text-[#0077B5] brightness-150 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" />
                        <p className="font-black text-white uppercase text-[10px] tracking-[0.2em] group-hover:text-purple-400 transition-colors">GitHub</p>
                    </a>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                    <p>© 2026 ECE AKÇAY. ENGINEERED WITH PASSION.</p>
                    <div className="flex gap-8 italic">
                        <span className="hover:text-white cursor-pointer transition-colors">PRIVACY</span>
                        <span className="hover:text-white cursor-pointer transition-colors">TERMS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
