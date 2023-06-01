'use client';

import type { ReactNode } from 'react';

export type ButtonProps = {
  children?: string | ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`
      ${
        className ?? ''
      }from-brand-blue hover:from-primary-600 to-brand-green  rounded bg-gradient-to-r px-6 py-2.5 text-xs font-medium leading-tight text-white shadow-md transition duration-200 ease-in-out hover:scale-110 hover:to-green-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
