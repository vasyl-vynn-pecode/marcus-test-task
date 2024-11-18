import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  className,
  ...rest
}) => {
  const baseClasses = 'rounded transition-transform duration-200 ease-in-out';
  const variantClasses = {
    primary: 'bg-customColor text-white hover:bg-opacity-90',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline:
      'border border-customColor text-customColor hover:bg-customColor hover:text-white',
  };
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const combinedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    'hover:scale-105 active:scale-95',
    className
  );

  return (
    <button onClick={onClick} className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};
