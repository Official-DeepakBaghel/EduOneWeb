'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

const Navigationbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#' },
        { name: 'GetApk', href: '#' },
        { name: 'For Students', href: '#' },
        { name: 'For Teachers', href: '#' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area - Keeping it minimal as per reference image */}
                <div className="text-xl font-bold font-orbitron tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    EduOne
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-rajdhani tracking-wide"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="flex items-center gap-2 text-xs font-bold font-orbitron tracking-widest text-white hover:text-cyan-400 transition-colors border border-white/20 px-4 py-2 rounded-full hover:border-cyan-400/50 hover:bg-cyan-400/10">
                        <User className="w-4 h-4" />
                        SIGN UP / LOG IN
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-white"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-orbitron text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="text-xl font-orbitron text-cyan-400">
                        SIGN UP / LOG IN
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navigationbar;
