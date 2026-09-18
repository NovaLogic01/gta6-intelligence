'use client'

import { useState, useEffect } from 'react'
import { getDiscoveryItems } from '@/lib/interaction'
import { BaseEntity } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import Link from 'next/link'

export function DiscoveryQueue({ count = 3 }: { count?: number }) {
  const [items, setItems] = useState<BaseEntity[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setItems(getDiscoveryItems(count))
  }, [count])

  if (!isClient || items.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map(item => (
        <Link key={item.id} href={`/database/${item.category}s/${item.slug}`} className="group card-base p-5 border-border-primary/40 hover:border-accent-blue/50 transition-colors bg-bg-secondary/10 flex flex-col justify-between h-full min-h-[140px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase group-hover:text-accent-blue transition-colors">Did You Know?</span>
              <StatusBadge status={item.status as any} size="sm" />
            </div>
            <h4 className="text-lg text-text-primary font-medium mb-2">{item.name}</h4>
          </div>
          <div className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {item.description}
          </div>
        </Link>
      ))}
    </div>
  )
}
