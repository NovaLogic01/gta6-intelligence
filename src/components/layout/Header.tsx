'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'News', href: '/news' },
    { name: 'Database', href: '/database' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Map', href: '/map' },
    { name: 'Trailers', href: '/trailers' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-primary/50 bg-bg-primary/80 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bold tracking-tighter text-xl group-hover:text-accent-blue transition-colors">GTA VI</span>
          <span className="text-sm font-mono text-text-tertiary uppercase tracking-widest hidden sm:inline-block">Intel</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors relative ${isActive ? 'text-accent-blue' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-accent-blue" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/search" className="text-text-secondary hover:text-accent-blue transition-colors" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
          
          <button 
            className="md:hidden text-text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border-primary bg-bg-secondary absolute w-full">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-text-primary tracking-wide uppercase p-2 border-l-2 border-transparent hover:border-accent-blue hover:text-accent-blue transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
