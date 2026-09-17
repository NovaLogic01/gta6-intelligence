import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-secondary" role="contentinfo">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="GTA VI Intel - Home">
              <div className="w-7 h-7 rounded-subtle bg-accent-blue/10 border border-accent-blue-border flex items-center justify-center">
                <span className="text-accent-blue font-display font-bold text-xs">VI</span>
              </div>
              <span className="font-display font-bold text-sm tracking-tight text-text-primary">
                GTA VI INTEL
              </span>
            </Link>
            <p className="text-body-sm text-text-tertiary max-w-xs">
              A continuously organized intelligence layer for Grand Theft Auto VI.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-overline text-text-secondary uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-text-tertiary hover:text-text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-overline text-text-secondary uppercase tracking-wider mb-4">Database</h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.database.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-text-tertiary hover:text-text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial */}
          <div>
            <h3 className="text-overline text-text-secondary uppercase tracking-wider mb-4">Editorial</h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.editorial.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-text-tertiary hover:text-text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-overline text-text-secondary uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-text-tertiary hover:text-text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border-primary">
          <p className="text-caption text-text-muted max-w-3xl leading-relaxed">
            {siteConfig.disclaimer}
          </p>
          <p className="text-caption text-text-muted mt-3">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All original content is the property of this project.
          </p>
        </div>
      </div>
    </footer>
  )
}
