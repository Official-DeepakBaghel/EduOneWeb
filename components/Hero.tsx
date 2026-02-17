'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center bg-[#050505] overflow-hidden">
            {/* Diagonal Background Split - Updated for dynamic feel */}
            <div
                className="absolute top-0 right-0 w-[65%] h-full bg-gradient-to-bl from-purple-900/10 via-[#0a0a0a] to-transparent z-0 transform skew-x-[-15deg] origin-top-right border-l border-white/5 opacity-80"
                style={{ backdropFilter: 'blur(2px)' }}
            />

            {/* Glowing Orbs */}
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_90%)] pointer-events-none z-0" />

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full relative z-10 h-full lg:pt-0">

                {/* LEFT COLUMN: Student Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-[500px] mx-auto lg:mr-auto flex justify-center lg:justify-start order-2 lg:order-1"
                >
                    {/* Main Image Container */}


                    {/* Floating Stat Card 1: Attendance */}


                    {/* Floating Stat Card 2: Next Class */}

                </motion.div>

                {/* RIGHT COLUMN: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col justify-center h-full text-left order-1 lg:order-2 lg:pl-10"
                >
                    <div className="flex flex-col relative z-20">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="h-[2px] w-8 bg-cyan-500/80 shadow-[0_0_10px_rgba(0,255,242,0.5)]"></span>
                            <span className="text-cyan-400 font-rajdhani tracking-[0.3em] text-sm uppercase font-semibold">Next-Gen Education System</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-[5.5rem] lg:text-[7rem] font-black font-orbitron tracking-tighter leading-[0.9] text-white mb-4 drop-shadow-2xl">
                            EDU<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x">ONE</span>
                        </h1>

                        <div className="relative w-fit">
                            <h2 className="text-2xl md:text-[2.5rem] lg:text-[3.5rem] font-bold font-orbitron tracking-tight leading-[1.1] text-gray-200">
                                Digital Campus
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                    Experience
                                </span>
                            </h2>
                            {/* Glitch Overlay Text */}
                            <span className="absolute top-[55%] left-1 text-purple-500 opacity-20 transform -translate-y-1/2 font-black font-orbitron tracking-tight text-[3.5rem] pointer-events-none mix-blend-screen animate-pulse hidden lg:block">Experience</span>
                        </div>
                    </div>

                    <div className="mt-8 relative border-l-2 border-white/10 pl-8 ml-2">
                        <div className="absolute top-0 left-[-2px] w-[2px] h-[40%] bg-gradient-to-b from-cyan-500 to-transparent shadow-[0_0_10px_#00fff2]" />
                        <p className="text-gray-400 font-rajdhani text-xl leading-relaxed max-w-lg">
                            Your definitive all-in-one college companion. Smart attendance, bunk management, and digital libraries powered by advanced AI.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mt-12">
                        <button className="group relative px-8 py-4 bg-cyan-400 text-black font-orbitron font-black text-sm tracking-wide overflow-hidden hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,242,0.4)] hover:shadow-[0_0_40px_rgba(0,255,242,0.6)] clip-path-slant">
                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center gap-2 uppercase">Connect Wallet <Zap className="w-4 h-4 text-black fill-current" /></span>
                        </button>

                        <button className="flex items-center gap-3 text-cyan-300 font-orbitron font-bold text-sm hover:text-white transition-all group px-8 py-4 border border-cyan-500/30 hover:border-cyan-400 rounded-lg bg-cyan-950/30 hover:bg-cyan-900/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,242,0.1)] hover:shadow-[0_0_25px_rgba(0,255,242,0.2)]">
                            Explore
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-current" />
                        </button>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .clip-path-slant {
                    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
                }
             `}</style>
        </section>
    );
};

export default Hero;
