import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Github, Linkedin, Mail, ExternalLink, Code, Database, 
  Menu, X, Sparkles, Server, Smartphone, Cpu, 
  Layers, Zap, Coffee, Terminal, CheckCircle2, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const stats = [
    { label: 'Yıl Deneyim', value: '1+', icon: Layers },
    { label: 'Proje', value: '15+', icon: Zap },
    { label: 'Kahve/Kod', value: '∞', icon: Coffee },
    { label: 'Başarı Oranı', value: '%100', icon: CheckCircle2 },
  ];

  const projects = [
    {
      title: 'OtobuzzApp',
      category: 'Full-Stack iOS',
      desc: 'SwiftUI ve Node.js ile biletleme deneyimi. Dinamik koltuk seçimi ve JWT güvenliği.',
      tech: ['SwiftUI', 'Node.js', 'PostgreSQL', 'Socket.io'],
      color: 'from-orange-500 to-red-600',
      github: 'https://github.com/eceakcay/OtobuzzApp'
    },
    {
      title: 'AllerCheck',
      category: 'AI & Health',
      desc: 'Vision Framework ile OCR tabanlı içerik analizi yapan sağlık asistanı.',
      tech: ['Vision', 'CoreData', 'Combine', 'CloudKit'],
      color: 'from-emerald-400 to-cyan-500',
      github: 'https://github.com/eceakcay/AllerCheck'
    },
    {
      title: 'NewsApp',
      category: 'UIKit / Clean Architecture',
      desc: 'Modern pagination ve ağ katmanı yönetimi ile gerçek zamanlı haber akışı.',
      tech: ['UIKit', 'Combine', 'URLSession', 'MVVM'],
      color: 'from-blue-600 to-indigo-700',
      github: 'https://github.com/eceakcay/NewsUIKit'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-slate-300 selection:bg-primary/40 selection:text-white overflow-x-hidden">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-accent z-[100] origin-left" style={{ scaleX }} />

      {/* Modern Arka Plan Katmanları */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* NAV BAR */}
      <nav className={`fixed top-0 w-full z-[90] transition-all duration-500 ${isScrolled ? 'py-4 bg-black/70 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-purple-600 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <Terminal size={20} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Ece.Akcay</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Hakkımda', 'Beceriler', 'Projeler', 'Deneyim'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace('ı', 'i'))} className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary rounded-full transition-all group-hover:w-full" />
              </button>
            ))}
            <a href="mailto:eceakcay.36@gmail.com">
              <Button className="bg-white text-black hover:bg-primary hover:text-black rounded-full px-8 font-bold transition-all transform hover:scale-105">
                KONUŞALIM
              </Button>
            </a>
          </div>
        </div>
      </nav>

{/* HERO SECTION */}
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
              KODLA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500">TASARLA.</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mb-12">
                <img 
                    src="/ben.png" 
                    alt="Ece Akçay Portre"
                    className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/40 transition-all hover:scale-105 duration-500"
                />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed italic"
            >
              Apple ekosisteminde sınırları zorlayan, performans odaklı ve estetik iOS çözümleri geliştiriyorum.
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center gap-6">
              {/* MOR BUTON: Parlak ve Neon Efektli */}
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projeler')} 
                className="h-16 px-10 rounded-2xl bg-purple-600 text-white font-black text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:bg-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all transform hover:scale-105"
              >
                PROJELERİ GÖR <ArrowRight className="ml-2" />
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

{/* STATS SECTION - Daha Kompakt Versiyon */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01] relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center group">
                {/* İKON: Daha küçük ve odaklı */}
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <stat.icon 
                    size={28} 
                    className="relative z-10 mx-auto text-purple-400 brightness-150 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-all duration-300" 
                  />
                </div>

                {/* DEĞER: Boyut bir tık küçültüldü */}
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter transition-transform group-hover:text-purple-300">
                  {stat.value}
                </h4>
                
                {/* ETİKET: Daha yakın ve kompakt */}
                <p className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500 group-hover:text-purple-400 transition-colors mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAKKIMDA */}
      <section id="hakkimda" className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase italic">Bir Fikri <span className="text-primary">Ürüne</span> Dönüştürmek.</h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed font-medium italic">
              Teknolojiye olan tutkum, Swift ve SwiftUI dünyasında hayat buluyor. Kurumsal projelerde kazandığım deneyimle, kullanıcı deneyimini en üst seviyeye çıkaracak modüler mimariler kurguluyorum.
            </p>
            <div className="space-y-4 pt-4">
              {['MVVM & Clean Architecture Specialist', 'iOS (UIKit & SwiftUI) Development', '.NET 8 / ASP.NET Core Backend Skills'].map(item => (
                <div key={item} className="flex items-center gap-3 text-white font-bold tracking-tight">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-[30px] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
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

      {/* BECERİLER */}
      <section id="beceriler" className="py-32 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white tracking-tighter mb-4 uppercase italic">Teknik Yetkinlikler</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/20 to-transparent border border-white/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-primary/50 transition-all">
              <Smartphone size={48} className="text-primary mb-8" />
              <div>
                <h3 className="text-3xl font-black text-white mb-2 italic">iOS Development</h3>
                <p className="text-sm text-slate-400 font-medium">Swift, SwiftUI, UIKit ve Apple SDK'ları üzerinde kurumsal standartlarda geliştirme.</p>
              </div>
            </div>
            
            {[
              { name: 'Node.js', icon: Server, color: 'text-green-400' },
              { name: 'ASP.NET', icon: Cpu, color: 'text-blue-400' },
              { name: 'MSSQL', icon: Database, color: 'text-orange-400' },
              { name: 'Git / GitLab', icon: Github, color: 'text-white' },
            ].map((skill, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[32px] p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:border-primary/30 transition-all group">
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
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Sürdürülebilir Modüler Mimari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJELER */}
      <section id="projeler" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic underline decoration-primary decoration-4">Deneyimler.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <motion.div key={idx} whileHover={{ y: -20 }} className="group">
                <div className={`relative h-[480px] rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-b ${project.color} p-1 transition-all group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
                  <div className="absolute inset-0 bg-[#0a0a0a] rounded-[39px] transition-all group-hover:opacity-90" />
                  
                  <div className="relative h-full p-10 flex flex-col">
                    <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-4 italic">{project.category}</span>
                    <h3 className="text-4xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-slate-400 font-bold italic mb-8 flex-1 leading-relaxed">"{project.desc}"</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300 font-bold uppercase tracking-widest">{t}</span>
                      ))}
                    </div>

                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="self-end">
                      <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:bg-primary transition-all rotate-[-15deg] group-hover:rotate-0 shadow-xl">
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

      {/* DENEYİM */}
{/* DENEYİM */}
      <section id="deneyim" className="py-32 bg-white/[0.01] relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            {/* Başlıktaki Mor Vurgu */}
            <h2 className="text-5xl font-black text-white tracking-tighter mb-4 uppercase italic">
              Kariyer <span className="text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Yolculuğu</span>
            </h2>
            <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
          </div>
          
          <div className="space-y-16 relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-purple-500/20 hidden md:block" />

            {[
              { 
                company: 'IBTECH Uluslararası Bilişim - QNB', 
                role: 'Stajyer / iOS Developer', 
                date: 'Ekim 2025 – Devam Ediyor', 
                desc: 'Kurumsal projelerde iOS (UIKit & SwiftUI) tabanlı mobil uygulama geliştirme süreçlerinde görev alıyorum. MVVM mimarisi kullanarak modüler, sürdürülebilir ve test edilebilir ekranlar geliştiriyorum. Bankacılık ve kurumsal yazılım standartlarına uygun temiz kod ve güvenli geliştirme prensipleriyle çalışıyorum. .NET 8 / ASP.NET Core kullanarak kurumsal ihtiyaçlara yönelik RESTful Web API geliştirme süreçlerinde aktif rol alıyorum.' 
              },
              { 
                company: 'Miron Yazılım A.Ş', 
                role: 'Stajyer / Backend Developer', 
                date: 'Temmuz 2025 – Eylül 2025', 
                desc: 'C# ve ASP.NET Core 8 ile backend geliştirme, OOP ve katmanlı mimari üzerine çalışmalar yaptım. MSSQL kullanarak CRUD işlemleri, örnek veritabanı sorguları ve performans incelemeleri gerçekleştirdim. REST & SOAP servislerini Postman ve SOAP UI ile test ettim, eski servis ve metotları analiz ettim. Dapper, SQL Profiler, IIS ve GitLab kullanarak sorgu analizi, debug ve versiyon kontrol süreçlerine katıldım.' 
              }
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Noktası - Mor Parlama */}
                <div className="absolute left-[-9px] md:left-1/2 md:ml-[-5px] top-10 w-3 h-3 bg-purple-400 rounded-full z-10 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

                <div className="w-full md:w-1/2">
                  <div className="group bg-[#0a0a0a] border border-purple-500/30 p-10 rounded-[40px] hover:border-purple-400 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
                    
                    {/* Metnin altındaki hafif mor ışık sızması */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-[80px]" />
                    
                    <div className="relative z-10">
                      {/* TARİH: Parlak Neon Mor Arka Plan + Siyah Metin (Ultra Okunabilir) */}
                      <div className="inline-block mb-6 px-5 py-2 rounded-xl bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <span className="text-black font-black text-xs uppercase tracking-[0.2em]">
                          {exp.date}
                        </span>
                      </div>

                      <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">
                        {exp.role}
                      </h3>
                      
                      {/* Şirket Adı - Parlak Mor */}
                      <h4 className="text-xl font-bold text-purple-400 mb-8 flex items-center gap-3 uppercase tracking-tighter">
                        <span className="w-8 h-1 bg-purple-500" /> {exp.company}
                      </h4>

                      {/* AÇIKLAMA: Tam Beyaz ve Kalın (Bold) */}
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

    {/* FOOTER */}
      <footer id="iletisim" className="pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase italic">
         HADİ <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,1)] brightness-125 contrast-125">TANIŞALIM.</span>
        </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
            {/* E-Posta */}
            <a href="mailto:eceakcay.36@gmail.com" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail size={40} className="mx-auto mb-4 text-[#0077B5] brightness-150 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" />
              <p className="font-black text-white uppercase text-[10px] tracking-[0.2em] group-hover:text-blue-400 transition-colors">E-Posta</p>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ece-ak%C3%A7ay-388721299/" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Linkedin size={40} className="mx-auto mb-4 text-[#0077B5] brightness-150 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" />
              <p className="font-black text-white uppercase text-[10px] tracking-[0.2em] group-hover:text-blue-400 transition-colors">LinkedIn</p>
            </a>

            {/* GitHub */}
            <a href="https://github.com/eceakcay" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Github size={40} className="mx-auto mb-4 text-[#0077B5] brightness-150 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" />
              <p className="font-black text-white uppercase text-[10px] tracking-[0.2em] group-hover:text-blue-400 transition-colors">GitHub</p>
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
    </div>
  );
};

export default Index;