import React from 'react';

interface SwitchProps {
  id?: string; // Add id property
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void; // Change onChange to onCheckedChange
  disabled?: boolean;
  className?: string; // Add className property
}

export const Switch: React.FC<SwitchProps> = ({ id, checked, onCheckedChange, disabled = false, className }) => {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:ring-offset-2 focus:ring-offset-[#0D0F2D] ${
        checked ? 'bg-[#1E90FF]' : 'bg-[#1A1C3A]'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onClick={() => !disabled && onCheckedChange?.(!checked)}
      disabled={disabled}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
};
