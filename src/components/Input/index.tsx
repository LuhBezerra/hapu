import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  return (
    <div className="input-block">
      <input
        placeholder={placeholder}
        type="text"
        id={name}
        min="1"
        {...rest}
      />
    </div>
  );
};
