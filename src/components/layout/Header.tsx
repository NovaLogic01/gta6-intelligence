'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'News', href: '/news' },
    { name: 'Database', href: '/database' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Map', href: '/map' },
    { name: 'Confirmed', href: '/confirmed' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'border-b border-border-primary/50 bg-bg-primary/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`}>
      <div className="absolute inset-0 border-b border-border-primary/20 pointer-events-none"></div>
      <div className="container-wide flex h-14 items-center justify-between relative z-10">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-1.5 h-1.5 bg-accent-blue rounded-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-shadow"></div>
          <span className="font-bold tracking-tight text-lg text-text-primary group-hover:text-white transition-colors">GTA VI</span>
          <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest hidden sm:inline-block border-l border-border-primary/50 pl-3">Intelligence Terminal</span>
        </Link>
        
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[11px] font-mono tracking-widest uppercase transition-colors relative flex items-center h-14 ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.5)]" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CONTROLS */}
        <div className="flex items-center gap-4">
          <Link href="/search" className="text-text-tertiary hover:text-accent-blue transition-colors flex items-center gap-2 text-[10px] font-mono uppercase" aria-label="Search">
            <span className="hidden sm:inline-block">Search</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
          
          <button 
            className="md:hidden text-text-secondary hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border-primary/50 bg-bg-secondary/95 backdrop-blur-xl absolute w-full shadow-2xl">
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-mono text-text-primary tracking-widest uppercase flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <span className="text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </Link>
            ))}
            <Link 
              href="/explore"
              className="text-sm font-mono text-text-primary tracking-widest uppercase flex items-center justify-between group pt-6 border-t border-border-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Explore Mode</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
