'use client'

import { useEffect, useState } from 'react'
import { advertising } from '@/config/advertising'

export function Adsterra300x250() {
  if (!advertising.enabled) return null
  return (
    <div className="w-full flex justify-center my-6 overflow-hidden">
      <iframe 
        src="/ads/300x250.html" 
        width="300" 
        height="250" 
        scrolling="no" 
        frameBorder="0" 
        style={{ border: 'none', overflow: 'hidden' }}
        title="Advertisement"
      />
    </div>
  )
}

export function Adsterra320x50() {
  if (!advertising.enabled) return null
  return (
    <div className="w-full flex justify-center my-6 overflow-hidden md:hidden">
      <iframe 
        src="/ads/320x50.html" 
        width="320" 
        height="50" 
        scrolling="no" 
        frameBorder="0" 
        style={{ border: 'none', overflow: 'hidden' }}
        title="Advertisement"
      />
    </div>
  )
}

export function Adsterra728x90() {
  if (!advertising.enabled) return null
  return (
    <div className="hidden md:flex w-full justify-center my-8 overflow-hidden">
      <iframe 
        src="/ads/728x90.html" 
        width="728" 
        height="90" 
        scrolling="no" 
        frameBorder="0" 
        style={{ border: 'none', overflow: 'hidden' }}
        title="Advertisement"
      />
    </div>
  )
}

export function AdsterraResponsive() {
  if (!advertising.enabled) return null
  return (
    <>
      <Adsterra728x90 />
      <Adsterra320x50 />
    </>
  )
}

export function AdsterraNative() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && advertising.enabled) {
      const containerId = 'container-68eacad5b3c0ce97eb5659a777616adf'
      const container = document.getElementById(containerId)
      
      // Prevent duplicate script injection
      if (container && !container.hasAttribute('data-initialized')) {
        container.setAttribute('data-initialized', 'true')
        
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://pl31406932.profitableratecpmnetwork.com/68eacad5b3c0ce97eb5659a777616adf/invoke.js'
        script.setAttribute('data-cfasync', 'false')
        
        container.appendChild(script)
      }
    }
  }, [mounted])

  if (!advertising.enabled) return null

  return (
    <div className="w-full my-8 flex justify-center overflow-hidden">
      <div id="container-68eacad5b3c0ce97eb5659a777616adf"></div>
    </div>
  )
}
