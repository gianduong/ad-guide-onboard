
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2", className)}>
      <div
        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};
