'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);


    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const isActive = (href) => pathname === href;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${scrolled
                    ? 'bg-black/90 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                    : 'bg-gradient-to-b from-black/50 to-transparent border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">

                        <Link
                            href="/"
                            className="group relative z-50 flex-shrink-0"
                            aria-label="EduOne Home"
                        >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]">
                                <Image
                                    src="/weblogo.png"
                                    alt="EduOne Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>


                        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`relative text-base lg:text-lg font-medium transition-all duration-300 group ${isActive(link.href)
                                            ? 'text-yellow-400'
                                            : 'text-white/90 hover:text-yellow-400'
                                            }`}
                                    >
                                        {link.name}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive(link.href)
                                                ? 'w-full'
                                                : 'w-0 group-hover:w-full'
                                                }`}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>


                        <div className="hidden lg:block absolute top-0 right-8 pointer-events-none">
                            <Image
                                src="/navimg.png"
                                alt=""
                                width={280}
                                height={190}
                                className="opacity-90"
                                priority
                            />
                        </div>


                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative z-50 p-3 text-white/90 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-lg"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                        >
                            <div className="w-6 flex flex-col items-end gap-1.5">
                                <span
                                    className={`h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen
                                        ? 'w-6 rotate-45 translate-y-2'
                                        : 'w-6'
                                        }`}
                                />
                                <span
                                    className={`h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 w-6' : 'w-5'
                                        }`}
                                />
                                <span
                                    className={`h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen
                                        ? 'w-6 -rotate-45 -translate-y-2'
                                        : 'w-4'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>


            <div
                className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${mobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >

                <div
                    className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    onClick={() => setMobileMenuOpen(false)}
                />


                <div
                    className={`relative h-full flex flex-col items-center justify-center transition-all duration-500 ${mobileMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-8 opacity-0'
                        }`}
                >
                    <ul className="flex flex-col items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.name}
                                className={`transition-all duration-500 ${mobileMenuOpen
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-8 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: mobileMenuOpen
                                        ? `${index * 100 + 200}ms`
                                        : '0ms',
                                }}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-3xl font-bold transition-all duration-300 ${isActive(link.href)
                                        ? 'text-yellow-400 scale-110'
                                        : 'text-white/90 hover:text-yellow-400 hover:scale-110'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="absolute bottom-12 opacity-20">
                        <Image
                            src="/navimg.png"
                            alt=""
                            width={200}
                            height={136}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}