
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
const mockNFTs = [
    { title: "College Notes", author: "@Punk@8FA", bid: "Free", img: "/images/nft1.png", color: "#00fff2" },
    { title: "Career guide Pro", author: "@Art-X", bid: "65.4 INR", img: "/images/nft2.png", color: "#bd00ff" },
    { title: "College Bunk Detector", author: "Deepak Baghel", bid: "Free", img: "/images/nft3.png", color: "#ff00bd" },
    { title: "Speak with Ai", author: "@Daemon", bid: "65.4 INR", img: "/images/nft4.png", color: "#00fff2" },
    { title: "E-Library", author: "@Mech", bid: "85.4 INR", img: "/images/nft5.png", color: "#bd00ff" },
];

const Carousel = () => {      
    const [activeIndex, setActiveIndex] = useState(2);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % mockNFTs.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + mockNFTs.length) % mockNFTs.length);
    };

    return (
        <section className="relative w-full py-20 bg-[#050505] overflow-hidden flex flex-col items-center">
            {/* Controls */}
            <div className="absolute top-1/2 left-4 md:left-12 z-20">
                <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/10 hover:bg-cyan-400 text-white hover:text-black transition-all"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 md:right-12 z-20">
                <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/10 hover:bg-cyan-400 text-white hover:text-black transition-all"
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>




            <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center perspective-[1000px]">
                {mockNFTs.map((nft, index) => {

                    const offset = (index - activeIndex);

                    let effectiveOffset = offset;
                    if (offset > 2) effectiveOffset -= mockNFTs.length;
                    if (offset < -2) effectiveOffset += mockNFTs.length;

                    // Only show items within range -2 to 2
                    if (Math.abs(effectiveOffset) > 2) return null;

                    const isActive = effectiveOffset === 0;

                    return (
                        <motion.div
                            key={index}
                            className={`absolute w-[280px] md:w-[320px] h-[420px] rounded-2xl p-4 border border-white/10 glass-morphism flex flex-col gap-4 transition-all duration-500 ease-out cursor-pointer ${isActive ? 'z-20 border-cyan-400 shadow-[0_0_30px_rgba(0,255,242,0.2)]' : 'z-10 opacity-60'}`}
                            initial={false}
                            animate={{
                                x: effectiveOffset * 340, // spread
                                scale: isActive ? 1.1 : 0.9,
                                rotateY: effectiveOffset * -5, // slight rotation
                                zIndex: isActive ? 20 : 10 - Math.abs(effectiveOffset),
                                opacity: Math.abs(effectiveOffset) > 1 ? 0.3 : (isActive ? 1 : 0.6)
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={() => setActiveIndex(index)}
                        >
                            {/* Image Area */}
                            <div
                                className="w-full h-2/3 rounded-xl bg-gradient-to-br flex items-center justify-center text-6xl relative overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${nft.color}20, ${nft.color}40)` }}
                            >
                                <motion.div
                                    className="absolute inset-0 opacity-30"
                                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                                    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                                    style={{
                                        backgroundImage: `radial-gradient(circle at center, ${nft.color}, transparent 70%)`,
                                        backgroundSize: "150% 150%"
                                    }}
                                />
                                <Image src={nft.img} alt="NFT" width={100} height={100} />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-2">
                                <h3 className="font-orbitron font-bold text-lg text-white">{nft.title}</h3>
                                <p className="text-gray-400 text-xs font-rajdhani">{nft.author}</p>

                                <div className="flex justify-between items-center mt-2 p-2 bg-white/5 rounded-lg">
                                    <span className="text-cyan-400 font-bold text-sm tracking-wider">{nft.bid}</span>
                                    <button className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold px-4 py-1.5 rounded transition-colors">
                                        Get Apk
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Carousel;
