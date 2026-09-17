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
        // Core dark palette
        'bg-primary': '#0a0a0c',
        'bg-secondary': '#111114',
        'bg-tertiary': '#18181c',
        'bg-elevated': '#1e1e24',
        'bg-hover': '#252530',
        // Surface colors
        'surface-dark': '#0d0d10',
        'surface-mid': '#151518',
        'surface-light': '#1c1c22',
        // Text
        'text-primary': '#e8e8ec',
        'text-secondary': '#8a8a96',
        'text-tertiary': '#5a5a66',
        'text-muted': '#3a3a44',
        // Accent - restrained electric blue
        'accent-blue': '#3b82f6',
        'accent-blue-muted': '#2563eb',
        'accent-blue-dim': '#1d4ed8',
        'accent-blue-subtle': 'rgba(59, 130, 246, 0.1)',
        'accent-blue-border': 'rgba(59, 130, 246, 0.2)',
        // Cool violet accent
        'accent-violet': '#7c3aed',
        'accent-violet-muted': '#6d28d9',
        // Status colors
        'status-confirmed': '#10b981',
        'status-official': '#3b82f6',
        'status-reported': '#f59e0b',
        'status-rumor': '#ef4444',
        'status-speculation': '#8b5cf6',
        // Borders
        'border-primary': '#1e1e28',
        'border-secondary': '#2a2a36',
        'border-hover': '#3a3a48',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'subheading': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        'overline': ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.08em', fontWeight: '600' }],
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
        'subtle': '0.25rem',
        'card': '0.375rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config