import React from 'react';
import './index.less';

export interface ButtonProps {
  children?: React.ReactNode;
  shape?: 'round' | 'circle';
  block?: boolean;
  type?: 'primary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  block,
  type,
  shape = 'round',
}) => (
  <button
    className={`button ${shape} ${block && 'block'} ${type}`}
    type="button"
  >
    {children}
  </button>
);

export default Button;
