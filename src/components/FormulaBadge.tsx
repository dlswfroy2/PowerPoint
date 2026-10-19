import React from 'react';

interface FormulaBadgeProps {
  formula: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FormulaBadge: React.FC<FormulaBadgeProps> = ({ formula, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-mono font-semibold rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 shadow-sm ${sizeClasses[size]}`}
      title={`সূত্র: ${formula}`}
    >
      <span className="text-cyan-500 select-none">𝑓(𝑥)</span>
      <span>{formula}</span>
    </span>
  );
};
