'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/config'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-primary'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-16 lg:h-18" aria-label="Primary navigation">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2 group" aria-label="GTA VI Intel - Home">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-subtle bg-accent-blue/10 border border-accent-blue-border flex items-center justify-center">
                  <span className="text-accent-blue font-display font-bold text-sm">VI</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-tight text-text-primary leading-none">
                    GTA VI INTEL
                  </span>
                  <span className="text-[10px] text-text-tertiary tracking-widest uppercase leading-none mt-0.5">
                    Intelligence
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-body-sm rounded-subtle transition-colors ${
                      isActive
                        ? 'text-text-primary bg-bg-elevated'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <Link
                href="/search"
                className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-subtle hover:bg-bg-hover/50"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-subtle hover:bg-bg-hover/50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={mobileMenuRef}
            className="absolute top-16 right-0 left-0 bg-bg-primary border-b border-border-primary animate-slide-up"
          >
            <nav className="container-wide py-6 space-y-1" aria-label="Mobile navigation">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-subtle text-body-lg transition-colors ${
                      isActive
                        ? 'text-text-primary bg-bg-elevated'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="pt-4 mt-4 border-t border-border-primary">
                <Link
                  href="/search"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-subtle hover:bg-bg-hover/50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  Search Intelligence
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-18" aria-hidden="true" />
    </>
  )
}
