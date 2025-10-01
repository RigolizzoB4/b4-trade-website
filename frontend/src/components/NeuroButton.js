import React from 'react';
import { Link } from 'react-router-dom';

const NeuroButton = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = `
    neuro-button
    inline-flex items-center justify-center
    font-semibold transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-orange-200
    active:scale-95
  `;

  const variants = {
    primary: 'text-orange-500 hover:text-orange-600',
    secondary: 'text-gray-700 hover:text-gray-800',
    accent: 'text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default NeuroButton;