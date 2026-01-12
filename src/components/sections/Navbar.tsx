import React from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
    isScrolled: boolean;
    scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, scrollToSection }) => {
    return (
        <nav className={`fixed top-0 w-full z-[90] transition-all duration-500 ${isScrolled ? 'py-4 bg-black/70 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-purple-600/20">
                        <Terminal size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Ece.Akcay</span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {[
                        { label: 'About', id: 'about' },
                        { label: 'Skills', id: 'skills' },
                        { label: 'Projects', id: 'projects' },
                        { label: 'Experience', id: 'experience' }
                    ].map((item) => (
                        <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-xs font-bold tracking-widest uppercase hover:text-purple-400 transition-all relative group">
                            {item.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-purple-500 rounded-full transition-all group-hover:w-full" />
                        </button>
                    ))}
                    <a href="mailto:eceakcay.36@gmail.com">
                        <Button className="bg-white text-black hover:bg-purple-600 hover:text-white rounded-full px-8 font-bold transition-all transform hover:scale-105">
                            LET'S TALK
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
