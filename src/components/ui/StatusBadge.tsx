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
          dot: 'bg-status-confirmed'
        };
      case 'REPORTED':
        return {
          label: 'REPORTED',
          color: 'text-status-reported',
          dot: 'bg-status-reported'
        };
      case 'RUMOR':
      case 'SPECULATION':
        return {
          label: status,
          color: 'text-text-muted',
          dot: 'bg-text-muted'
        };
      default:
        return {
          label: status,
          color: 'text-text-tertiary',
          dot: 'bg-text-tertiary'
        };
    }
  };

  const config = getStatusConfig(status);
  const isSmall = size === 'sm';

  return (
    <div className={`inline-flex items-center gap-2 font-mono ${isSmall ? 'text-[10px]' : 'text-xs'} tracking-widest uppercase`}>
      <span className="text-text-tertiary opacity-50">[</span>
      <div className="flex items-center gap-1.5">
        <span className={`w-1 h-1 rounded-full ${config.dot} opacity-80`} aria-hidden="true" />
        <span className={`${config.color} font-medium`}>{config.label}</span>
      </div>
      <span className="text-text-tertiary opacity-50">]</span>
    </div>
  );
}
