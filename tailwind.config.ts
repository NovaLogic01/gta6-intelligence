import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core dark palette (Cinematic Intelligence)
        'bg-primary': '#050507',
        'bg-secondary': '#0a0a0c',
        'bg-tertiary': '#111114',
        'bg-elevated': '#18181c',
        'bg-hover': '#1e1e24',
        
        // Surface colors
        'surface-dark': '#0d0d10',
        'surface-mid': '#151518',
        'surface-light': '#1c1c22',
        
        // Text
        'text-primary': '#f0f0f4',
        'text-secondary': '#9a9aa6',
        'text-tertiary': '#6a6a76',
        'text-muted': '#4a4a54',
        
        // Accent - restrained electric blue
        'accent-blue': '#3b82f6',
        'accent-blue-muted': '#2563eb',
        'accent-blue-dim': '#1d4ed8',
        'accent-blue-subtle': 'rgba(59, 130, 246, 0.1)',
        'accent-blue-border': 'rgba(59, 130, 246, 0.25)',
        
        // Warm atmospheric accent
        'accent-amber': '#fbbf24',
        'accent-amber-muted': '#d97706',
        'accent-amber-subtle': 'rgba(251, 191, 36, 0.1)',
        
        // Cool violet accent
        'accent-violet': '#8b5cf6',
        'accent-violet-muted': '#7c3aed',
        
        // Status colors (Muted, precise)
        'status-confirmed': '#10b981',
        'status-official': '#3b82f6',
        'status-reported': '#f59e0b',
        'status-rumor': '#ef4444',
        'status-speculation': '#8b5cf6',
        
        // Borders
        'border-primary': '#1e1e28',
        'border-secondary': '#2a2a36',
        'border-hover': '#3a3a48',
        'border-subtle': '#15151a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'hero': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'subheading': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        'overline': ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '72rem',
        'article': '42rem',
        'narrow': '36rem',
      },
      borderRadius: {
        'subtle': '0.125rem', // sharp, precise
        'card': '0.25rem', // slightly rounded
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'breathe': 'breathe 8s ease-in-out infinite',
        'slow-pan': 'slowPan 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        slowPan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config