
'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedSection = () => {
    return (
        <section className="relative w-full py-32 bg-[#050505] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Image Composition */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative ml-0 md:mr-10"
                >
                    <div className="relative w-full max-w-md aspect-square mx-auto lg:mx-0">
                        {/* Glitch Effect Boxes */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-lg transform -rotate-6 scale-105 z-0" />
                        <div className="absolute inset-0 bg-black rounded-lg border border-white/10 overflow-hidden z-10 flex items-center justify-center">
                            {/* Placeholder for Glitch Face */}
                            <div className="w-full h-full bg-neutral-900 relative">
                                <div className="absolute inset-0 bg-[url('https://placehold.co/600x600/1a1a1a/ff00bd?text=GLITCH+ART')] bg-cover bg-center opacity-80 mix-blend-overlay" />
                                <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-900/10 backdrop-blur-sm border-r border-white/20" />
                                <div className="absolute bottom-10 left-10 text-6xl font-black text-white/10 font-orbitron">01</div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-24 h-24 bg-black border border-cyan-400/50 rounded-lg z-20 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,242,0.3)]"
                        >
                            <span className="text-cyan-400 font-bold font-orbitron">TOP #1</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-5xl md:text-7xl font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 stroke-text">
                        FANTASY
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-bold font-orbitron tracking-wide text-white">
                        NFT MARKET
                    </h2>

                    <p className="text-gray-400 font-rajdhani text-lg leading-relaxed max-w-lg mt-4">
                        The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
                        Buy, sell, and discover exclusive digital items.
                    </p>

                    <button className="w-fit mt-8 px-10 py-4 bg-cyan-400 text-black font-orbitron font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,242,0.4)]">
                        Learn More
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default FeaturedSection;
