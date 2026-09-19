'use client'

import { advertising } from '@/config/advertising'

export function SmartlinkAction() {
  if (!advertising.enabled || !advertising.smartlinks?.primary) return null

  return (
    <div className="w-full my-8 border border-border-primary/50 bg-bg-secondary/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-bold text-text-primary tracking-tight uppercase mb-1">Partner Offers</h3>
        <p className="text-sm text-text-secondary font-light">Explore external opportunities from our network partners.</p>
      </div>
      <a 
        href={advertising.smartlinks.primary}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="shrink-0 px-6 py-3 bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue border border-accent-blue/30 transition-colors uppercase font-mono text-[10px] tracking-widest text-center"
      >
        View Offers &rarr;
      </a>
    </div>
  )
}
