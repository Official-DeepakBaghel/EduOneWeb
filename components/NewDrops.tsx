
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ["New Drops", "Most Viewed", "Bids", "Related"];

const mockDrops = [
    { title: "Meta Human", author: "@Neo", bid: "15.6 ETH", img: "👤", color: "#bd00ff" },
    { title: "Cyber Pet", author: "@Techie", bid: "10.2 ETH", img: "🐕", color: "#00fff2" },
    { title: "Holo Skull", author: "@Death", bid: "8.9 ETH", img: "💀", color: "#ff00bd" },
    { title: "Glitch Art", author: "@Pixel", bid: "12.4 ETH", img: "👾", color: "#bd00ff" },
    { title: "Dunker", author: "@Meta", bid: "25.0 ETH", img: "🧢", color: "#00fff2" },
    { title: "Butterfly", author: "@Wings", bid: "18.1 ETH", img: "🦋", color: "#ff00bd" },
];

const NewDrops = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="relative w-full py-20 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">

                {/* Header / Tabs */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 z-10">
                    <div className="flex bg-white/5 p-1 rounded-full backdrop-blur-sm border border-white/10 overflow-x-auto max-w-full">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px-6 py-2 rounded-full text-sm font-bold font-rajdhani whitespace-nowrap transition-all duration-300 ${activeTab === idx
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(255,0,189,0.4)]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <button className="px-6 py-2 rounded-full font-rajdhani font-bold text-gray-400 border border-white/10 hover:border-white/30 transition-colors text-xs uppercase tracking-widest">
                        Price: High to Low
                    </button>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {mockDrops.map((drop, idx) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            key={idx}
                            className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-transparent via-white/5 to-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-cyan-500 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-black/90 m-[1px] rounded-2xl z-0" />

                            <div className="relative z-10 p-4 h-full flex flex-col gap-4">
                                {/* Image */}
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-900 group-hover:scale-[1.02] transition-transform duration-500">
                                    <div
                                        className="absolute inset-0 opacity-80"
                                        style={{ background: `radial-gradient(circle at center, ${drop.color}30, transparent 70%)` }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-8xl grayscale group-hover:grayscale-0 transition-all duration-500">
                                        {drop.img}
                                    </div>

                                    {/* Overlay on Hover */}
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Active
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex justify-between items-end mt-2">
                                    <div>
                                        <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-cyan-400 transition-colors">{drop.title}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600" />
                                            <p className="text-gray-400 text-sm font-rajdhani">{drop.author}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 font-rajdhani uppercase">Current Bid</p>
                                        <p className="text-cyan-400 font-bold font-orbitron text-lg">{drop.bid}</p>
                                    </div>
                                </div>

                                {/* Place Bid Button (appears/glows on hover) */}
                                <button className="w-full mt-2 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold font-rajdhani rounded-xl group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,242,0.1)] group-hover:shadow-[0_0_20px_rgba(0,255,242,0.4)]">
                                    Place Bid
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 'View All' Link */}
                <div className="flex justify-center mt-8">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-rajdhani font-bold tracking-widest text-sm group">
                        VIEW ALL
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewDrops;
