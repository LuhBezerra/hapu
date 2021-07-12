import React, { ButtonHTMLAttributes } from 'react';
import './styles.css';

export const RegularButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, ...restProps }) => {
    return (
      <button className="regular-button" {...restProps}>
        {children}
      </button>
    );
  };
