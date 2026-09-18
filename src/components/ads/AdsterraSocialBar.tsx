'use client'

import { useEffect, useState } from 'react'
import { advertising } from '@/config/advertising'

export function AdsterraSocialBar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && advertising.enabled) {
      // Prevent duplicate script injection
      const scriptId = 'adsterra-social-bar'
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script')
        script.id = scriptId
        script.src = 'https://pl31406933.profitableratecpmnetwork.com/d6/a8/1c/d6a81c5c12ca2733ece9162e9abbcefb.js'
        script.type = 'text/javascript'
        document.body.appendChild(script)
      }
    }
  }, [mounted])

  return null
}
