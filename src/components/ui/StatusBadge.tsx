import { Status } from '@/types';

interface StatusBadgeProps {
  status: Status;
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
  const getStatusConfig = (status: Status) => {
    switch (status) {
      case 'CONFIRMED':
      case 'OFFICIALLY_SHOWN':
        return {
          label: status.replace('_', ' '),
          color: 'text-status-confirmed',
          border: 'border-status-confirmed/30',
          dot: 'bg-status-confirmed'
        };
      case 'REPORTED':
        return {
          label: 'REPORTED',
          color: 'text-status-reported',
          border: 'border-status-reported/30',
          dot: 'bg-status-reported'
        };
      case 'RUMOR':
      case 'SPECULATION':
        return {
          label: status,
          color: 'text-status-rumor',
          border: 'border-status-rumor/30',
          dot: 'bg-status-rumor'
        };
      default:
        return {
          label: status,
          color: 'text-text-tertiary',
          border: 'border-border-primary',
          dot: 'bg-text-tertiary'
        };
    }
  };

  const config = getStatusConfig(status);
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';

  return (
    <div className={`inline-flex items-center gap-1.5 ${sizeClasses} rounded-none border ${config.border} bg-bg-primary/50 backdrop-blur-sm`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse-slow opacity-80`} aria-hidden="true" />
      <span className={`uppercase font-mono font-medium tracking-widest ${config.color}`}>
        {config.label}
      </span>
    </div>
  );
}
