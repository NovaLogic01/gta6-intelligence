interface AdSlotProps {
  position: 'header' | 'sidebar' | 'in-feed' | 'in-article' | 'footer'
  className?: string
}

/**
 * Ad slot placeholder component.
 * Monetization is disabled in Session 1.
 * This component renders nothing when monetization is disabled.
 * In future sessions, it will render the appropriate ad format.
 */
export function AdSlot({ position, className }: AdSlotProps) {
  // Monetization disabled in Session 1
  // When enabled, this will render the appropriate ad unit
  const isEnabled = false

  if (!isEnabled) {
    return null
  }

  // Future implementation will go here
  return (
    <div
      className={`ad-slot ad-slot-${position} ${className || ''}`}
      data-ad-position={position}
      aria-hidden="true"
    />
  )
}
